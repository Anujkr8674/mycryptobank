<div id="main" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: stretch; padding: 0 12px; gap: 16px; margin: 20px 0;">
    <!-- Withdrawals Card -->
    <div class="card-wrapper" style="flex: 1; min-width: 250px; max-width: calc(33.33% - 10px); margin-bottom: 20px;">
        <div class="card card-danger overflow-hidden bg-danger-transparent h-100">
            <div class="text-center bg-danger-gradient p-2">
                <span class="card-title tx-18 p-4">Withdrawals</span>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between mt-3">
                    <span class="text-white card-title tx-16">Approved</span>
                    <span class="text-white card-title tx-16">Pending</span>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <span class="text-white">--</span>
                    <span class="text-white">--</span>
                </div>
            </div>
            <div class="w-100 bg-danger pd-1"></div>
        </div>
    </div>

    <!-- Team Sales Card -->
    <div class="card-wrapper" style="flex: 1; min-width: 250px; max-width: calc(33.33% - 10px); margin-bottom: 20px;">
        <div class="card card-warning overflow-hidden bg-warning-transparent h-100">
            <div class="text-center bg-warning-gradient p-2">
                <span class="card-title tx-18 p-4">Team Sales</span>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between mt-3">
                    <span class="text-white card-title tx-16">Direct Business</span>
                    <span class="text-white card-title tx-16">Total Business</span>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <span class="text-white">--</span>
                    <span class="text-white">--</span>
                </div>
            </div>
            <div class="w-100 bg-warning pd-1"></div>
        </div>
    </div>

    <!-- Group Card -->
    <div class="card-wrapper" style="flex: 1; min-width: 250px; max-width: calc(33.33% - 10px); margin-bottom: 20px;">
        <div class="card card-success overflow-hidden bg-success-transparent h-100">
            <div class="text-center bg-success-gradient p-2">
                <span class="card-title tx-18 p-4">Group</span>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between mt-3">
                    <span class="text-white card-title tx-16">Direct Team</span>
                    <span class="text-white card-title tx-16">Total Team</span>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <span class="text-white">--</span>
                    <span class="text-white">--</span>
                </div>
            </div>
            <div class="w-100 bg-success pd-1"></div>
        </div>
    </div>
</div>

<!-- Responsive adjustments -->
<style>
@media (max-width: 992px) {
    .card-wrapper {
        max-width: calc(50% - 10px) !important;
    }
}

@media (max-width: 768px) {
    #main {
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
    }

    .card-wrapper {
        max-width: 100% !important;
    }
}
</style>
