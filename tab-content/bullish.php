<div class="grid gap-x-[10px] gap-y-[16px] md:gap-x-[24px] md:gap-y-[24px] my-[16px] md:my-[24px] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,220px)]">
    <!-- Filter items for Bullish -->
    <?php 
    $items = [
        [
            'class' => 'Futures_Grid-hit-hidden',
            'link' => '/trading-bots/futures/grid/BTCUSDC',
            'title' => 'Futures Grid',
            'description' => 'Amplify your purchasing power with an advanced version of Grid Trading.',
            'features' => ['Short Orders', 'USD-M / COIN-M']
        ],
        [
            'class' => 'Rebalancing_bot_Manual-hit-hidden',
            'link' => '/trading-bots/spot/rebalancing-bot/BTCUSDT',
            'title' => 'Rebalancing Bot',
            'description' => 'A Long term position strategy supporting an investment portfolio.',
            'features' => ['Diversify risk', 'Dynamic rebalance']
        ]
    ];
    
    foreach ($items as $item): ?>
        <div class="<?php echo $item['class']; ?> p-[16px] cursor-pointer border-solid border border-Line hover:border-PrimaryYellow rounded-[16px] group">
            <a href="<?php echo $item['link']; ?>" class="f-link no-underline" target="_blank">
                <!-- Item content structure same as grid-items.php -->
                <div class="mb-[12px] flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="mr-[4px]">
                            <div class="w-[20px] h-[20px] flex text-[20px] text-PrimaryText">
                                <!-- Icon SVG here -->
                            </div>
                        </div>
                        <div class="typography-subtitle1 truncate max-w-[135px] text-PrimaryText"><?php echo $item['title']; ?></div>
                    </div>
                </div>
                <div class="h-[72px] mb-[16px] trading_bots_list-hit-hidden">
                    <div class="text-SecondaryText md:text-TertiaryText typography-caption1 line-clamp-4"><?php echo $item['description']; ?></div>
                </div>
                <div>
                    <?php foreach ($item['features'] as $feature): ?>
                        <div>
                            <div class="flex items-center">
                                <div>
                                    <div class="w-[16px] h-[16px] mr-[4px] text-[16px] flex text-PrimaryText">
                                        <!-- Feature icon SVG -->
                                    </div>
                                </div>
                                <div class="typography-caption1 text-SecondaryText md:text-TertiaryText truncate"><?php echo $feature; ?></div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="hidden md:block bg-Line h-[0.5px] w-[100%] mt-[16px] mb-[12px]"></div>
                <div class="hidden md:flex typography-subtitle2 text-TextLink justify-center">Create</div>
            </a>
        </div>
    <?php endforeach; ?>
</div> 