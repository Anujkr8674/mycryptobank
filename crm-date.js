// Date range picker logic extracted from crm.php
// Handles: p2pDateRange, orderDateRange, tradeOrderDateRange
// Requires Litepicker library to be loaded before this script

// P2P Date Range Picker
function setupP2PDateRange() {
  if (window.Litepicker) {
    window.p2pPicker = new Litepicker({
      element: document.getElementById('p2pDateRange'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      format: 'YYYY-MM-DD',
      autoApply: true,
      maxDate: new Date(),
      dropdowns: {
        minYear: 2020,
        maxYear: new Date().getFullYear() + 1,
        months: true,
        years: true
      },
      setup: (picker) => {
        picker.on('selected', (start, end) => {
          document.getElementById('p2pDateRange').value = `${start.format('YYYY-MM-DD')} → ${end.format('YYYY-MM-DD')}`;
        });
      }
    });
    // Set default range to last 7 days
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 6);
    window.p2pPicker.setDateRange(lastWeek, today);
    document.getElementById('p2pDateRange').value = `${window.p2pPicker.getStartDate().format('YYYY-MM-DD')} → ${window.p2pPicker.getEndDate().format('YYYY-MM-DD')}`;
  }
}

// Order Date Range Picker
function setupOrderDateRange() {
  if (window.Litepicker) {
    window.picker = new Litepicker({
      element: document.getElementById('orderDateRange'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      format: 'YYYY-MM-DD',
      autoApply: true,
      maxDate: new Date(),
      dropdowns: {
        minYear: 2020,
        maxYear: new Date().getFullYear() + 1,
        months: true,
        years: true
      },
      setup: (picker) => {
        picker.on('selected', (start, end) => {
          document.getElementById('orderDateRange').value = `${start.format('YYYY-MM-DD')} → ${end.format('YYYY-MM-DD')}`;
        });
      }
    });
    // Set default range to last 7 days
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 6);
    window.picker.setDateRange(lastWeek, today);
    document.getElementById('orderDateRange').value = `${window.picker.getStartDate().format('YYYY-MM-DD')} → ${window.picker.getEndDate().format('YYYY-MM-DD')}`;
  }
}

// Trade Order Date Range Picker
function setupTradeOrderDateRange() {
  if (window.Litepicker) {
    window.tradePicker = new Litepicker({
      element: document.getElementById('tradeOrderDateRange'),
      singleMode: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      format: 'YYYY-MM-DD',
      autoApply: true,
      maxDate: new Date(),
      dropdowns: {
        minYear: 2020,
        maxYear: new Date().getFullYear() + 1,
        months: true,
        years: true
      },
      setup: (picker) => {
        picker.on('selected', (start, end) => {
          document.getElementById('tradeOrderDateRange').value = `${start.format('YYYY-MM-DD')} → ${end.format('YYYY-MM-DD')}`;
        });
      }
    });
    // Set default range to last 7 days
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 6);
    window.tradePicker.setDateRange(lastWeek, today);
    document.getElementById('tradeOrderDateRange').value = `${window.tradePicker.getStartDate().format('YYYY-MM-DD')} → ${window.tradePicker.getEndDate().format('YYYY-MM-DD')}`;
  }
}

// Call these functions on DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
  setupP2PDateRange();
  setupOrderDateRange();
  setupTradeOrderDateRange();
}); 