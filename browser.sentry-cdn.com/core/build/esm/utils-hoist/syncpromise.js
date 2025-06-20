import {
    isThenable
} from './is.js';

/* eslint-disable @typescript-eslint/no-explicit-any */

/** SyncPromise internal states */
var States;
(function(States) {
    /** Pending */
    const PENDING = 0;
    States[States["PENDING"] = PENDING] = "PENDING";
    /** Resolved / OK */
    const RESOLVED = 1;
    States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
    /** Rejected / Error */
    const REJECTED = 2;
    States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));

// Overloads so we can call resolvedSyncPromise without arguments and generic argument

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
    return new SyncPromise(resolve => {
        resolve(value);
    });
}

/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject) => {
        reject(reason);
    });
}

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
class SyncPromise {

    constructor(executor) {
        this._state = States.PENDING;
        this._handlers = [];

        this._runExecutor(executor);
    }

    /** @inheritdoc */
    then(
        onfulfilled,
        onrejected,
    ) {
        return new SyncPromise((resolve, reject) => {
            this._handlers.push([
                false,
                result => {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                    } else {
                        try {
                            resolve(onfulfilled(result));
                        } catch (e) {
                            reject(e);
                        }
                    }
                },
                reason => {
                    if (!onrejected) {
                        reject(reason);
                    } else {
                        try {
                            resolve(onrejected(reason));
                        } catch (e) {
                            reject(e);
                        }
                    }
                },
            ]);
            this._executeHandlers();
        });
    }

    /** @inheritdoc */
    catch (
        onrejected,
    ) {
        return this.then(val => val, onrejected);
    }

    /** @inheritdoc */
    finally(onfinally) {
        return new SyncPromise((resolve, reject) => {
            let val;
            let isRejected;

            return this.then(
                value => {
                    isRejected = false;
                    val = value;
                    if (onfinally) {
                        onfinally();
                    }
                },
                reason => {
                    isRejected = true;
                    val = reason;
                    if (onfinally) {
                        onfinally();
                    }
                },
            ).then(() => {
                if (isRejected) {
                    reject(val);
                    return;
                }

                resolve(val);
            });
        });
    }

    /** Excute the resolve/reject handlers. */
    _executeHandlers() {
        if (this._state === States.PENDING) {
            return;
        }

        const cachedHandlers = this._handlers.slice();
        this._handlers = [];

        cachedHandlers.forEach(handler => {
            if (handler[0]) {
                return;
            }

            if (this._state === States.RESOLVED) {
                handler[1](this._value);
            }

            if (this._state === States.REJECTED) {
                handler[2](this._value);
            }

            handler[0] = true;
        });
    }

    /** Run the executor for the SyncPromise. */
    _runExecutor(executor) {
        const setResult = (state, value) => {
            if (this._state !== States.PENDING) {
                return;
            }

            if (isThenable(value)) {
                void(value).then(resolve, reject);
                return;
            }

            this._state = state;
            this._value = value;

            this._executeHandlers();
        };

        const resolve = (value) => {
            setResult(States.RESOLVED, value);
        };

        const reject = (reason) => {
            setResult(States.REJECTED, reason);
        };

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
}

export {
    SyncPromise,
    rejectedSyncPromise,
    resolvedSyncPromise
};
//# sourceMappingURL=syncpromise.js.map