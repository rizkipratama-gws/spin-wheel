// --- DATA KELAS ---
const TEAM_MAP = {
    Kelas: [
        { abbr: "Amanda", name: "Amanda Rahmawaty" },
        { abbr: "Arika", name: "Arika Pratiwi" },
        { abbr: "Aureliya", name: "Aureliya Faezabariza" },
        { abbr: "Calista", name: "Calista Kaira Anwar" },
        { abbr: "Cindy", name: "Cindy Zayla Shalsabila" },
        { abbr: "Dinda A.", name: "Dinda Aisyah Harum Minanti" },
        { abbr: "Dinda H.", name: "Dinda Amalia Husna" },
        { abbr: "Eri", name: "Eri Rahma Putri" },
        { abbr: "Hary", name: "Hary Hardianto" },
        { abbr: "Karena", name: "Karena Cantika Kirani" },
        { abbr: "Keisha", name: "Keisha Sefinah Raihan" },
        { abbr: "Kiara", name: "Kiara Melva Karenina" },
        { abbr: "Laeli", name: "Laeli Nurhasanah" },
        { abbr: "Lindiyani", name: "Lindiyani Ariezka" },
        { abbr: "Rasya", name: "Mohammad Rasya Pradita" },
        { abbr: "Fathir", name: "Muhammad Fathir Afrizal" },
        { abbr: "Iqbal", name: "Muhammad Iqbal Musyafa" },
        { abbr: "Nabilah", name: "Nabilah Fikra" },
        { abbr: "Nadzwa", name: "Nadzwa Sihab" },
        { abbr: "Nela", name: "Nela Nur' Indah" },
        { abbr: "Nessa", name: "Nessa Aura Livia" },
        { abbr: "Nesya", name: "Nesya Citra Dzakiiah" },
        { abbr: "Neza", name: "Neza Putri Oktavia" },
        { abbr: "Nisrina", name: "Nisrina Maulida" },
        { abbr: "Nurwakhidah", name: "Nurwakhidah Wajihah Putriyana" },
        { abbr: "Prishilia", name: "Prishilia" },
        { abbr: "Putri", name: "Putri Ayu Sulialmira" },
        { abbr: "Rina", name: "Rina Syifani Jannah" },
        { abbr: "Riska", name: "Riska Ayunita" },
        { abbr: "Rizki", name: "Rizki Pratama" }
    ]
};

const NUMBERS_MAP = {
    Kelas: [
        { abbr: "27", name: "Nomor 27" },
        { abbr: "11", name: "Nomor 11" },
        { abbr: "8", name: "Nomor 8" },
        { abbr: "3", name: "Nomor 3" },
        { abbr: "1", name: "Nomor 1" },
        { abbr: "20", name: "Nomor 20" },
        { abbr: "2", name: "Nomor 2" },
        { abbr: "22", name: "Nomor 22" },
        { abbr: "4", name: "Nomor 4" },
        { abbr: "17", name: "Nomor 17" },
        { abbr: "23", name: "Nomor 23" },
        { abbr: "16", name: "Nomor 16" },
        { abbr: "9", name: "Nomor 9" },
        { abbr: "15", name: "Nomor 15" },
        { abbr: "28", name: "Nomor 28" },
        { abbr: "5", name: "Nomor 5" },
        { abbr: "18", name: "Nomor 18" },
        { abbr: "29", name: "Nomor 29" },
        { abbr: "6", name: "Nomor 6" },
        { abbr: "14", name: "Nomor 14" },
        { abbr: "21", name: "Nomor 21" },
        { abbr: "13", name: "Nomor 13" },
        { abbr: "10", name: "Nomor 10" },
        { abbr: "12", name: "Nomor 12" },
        { abbr: "7", name: "Nomor 7" },
        { abbr: "26", name: "Nomor 26" },
        { abbr: "24", name: "Nomor 24" },
        { abbr: "19", name: "Nomor 19" },
        { abbr: "30", name: "Nomor 30" },
        { abbr: "25", name: "Nomor 25" }
    ]
};

// --- CORE STATE ---
let teamNames = [];
let numberNames = [];
let isSpinning1 = false;
let isSpinning2 = false;
let currentLeagueKey = "Kelas";

const canvas1 = document.getElementById('wheelCanvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('wheelCanvas2');
const ctx2 = canvas2.getContext('2d');

let startAngle1 = 0;
let startAngle2 = 0;
let spinTimeout1 = null;
let spinTimeout2 = null;

const wheelColors = ["#0366d6", "#8BC34A", "#FF9800", "#E91E63", "#4A148C", "#FFEB3B", "#3F51B5", "#F44336", "#00BCD4", "#2c974b"];

// --- DRAWING FUNCTIONS ---
function drawWheel(canvas, ctx, names, startAngle, colors) {
    const currentRadius = canvas.width / 2;
    const diameter = canvas.width;
    ctx.clearRect(0, 0, diameter, diameter);

    if (names.length === 0) {
        ctx.fillStyle = '#cc5555';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('List is Empty!', currentRadius, currentRadius);
        return;
    }

    const arc = Math.PI / (names.length / 2);
    for(let i = 0; i < names.length; i++) {
        const item = names[i];
        const angle = startAngle + i * arc;
        const textToDisplay = item.abbr;
        const fillColor = colors[i % colors.length];

        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(currentRadius, currentRadius, currentRadius - 10, angle, angle + arc, false);
        ctx.arc(currentRadius, currentRadius, 0, angle + arc, angle, true);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(currentRadius + Math.cos(angle + arc / 2) * (currentRadius - 70),
                      currentRadius + Math.sin(angle + arc / 2) * (currentRadius - 70));
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center'; 
        ctx.fillText(textToDisplay, 0, 0);
        ctx.restore();
    }

    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(currentRadius - 15, 0);
    ctx.lineTo(currentRadius + 15, 0);
    ctx.lineTo(currentRadius, 30);
    ctx.fill();
}

// --- SPIN LOGIC ---
function spinWheels() {
    if (isSpinning1 || isSpinning2) return;
    if (teamNames.length === 0 || numberNames.length === 0) {
        showModal('Error', 'Satu atau kedua list kosong!');
        return;
    }
    toggleInputs(false);
    spinWheel1();
    spinWheel2();
}

function spinWheel1() {
    isSpinning1 = true;
    document.getElementById('result1').textContent = "Spinning...";
    const spinAngleStart1 = Math.random() * 10 + 10;
    const spinTimeTotal1 = Math.random() * 3000 + 6000;
    let spinTime1 = 0;

    function rotateWheel1() {
        spinTime1 += 30;
        if(spinTime1 >= spinTimeTotal1) {
            stopRotateWheel1();
            return;
        }
        const spinAngle = spinAngleStart1 - easeOut(spinTime1, 0, spinAngleStart1, spinTimeTotal1);
        startAngle1 += (spinAngle * Math.PI / 180);
        drawWheel(canvas1, ctx1, teamNames, startAngle1, wheelColors);
        spinTimeout1 = requestAnimationFrame(rotateWheel1);
    }
    rotateWheel1();
}

function stopRotateWheel1() {
    cancelAnimationFrame(spinTimeout1);
    isSpinning1 = false;
    const degrees = startAngle1 * 180 / Math.PI + 90;
    const arc = Math.PI / (teamNames.length / 2);
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) % 360 / arcd);
    
    const winningItem = teamNames[index];
    document.getElementById('result1').textContent = winningItem ? winningItem.name : '?';
    if (!isSpinning2) handleSpinStop();
}

function spinWheel2() {
    isSpinning2 = true;
    document.getElementById('result2').textContent = "Spinning...";
    const spinAngleStart2 = Math.random() * 10 + 10;
    const spinTimeTotal2 = Math.random() * 6000 + 7000;
    let spinTime2 = 0;

    function rotateWheel2() {
        spinTime2 += 30;
        if(spinTime2 >= spinTimeTotal2) {
            stopRotateWheel2();
            return;
        }
        const spinAngle = spinAngleStart2 - easeOut(spinTime2, 0, spinAngleStart2, spinTimeTotal2);
        startAngle2 += (spinAngle * Math.PI / 180);
        drawWheel(canvas2, ctx2, numberNames, startAngle2, wheelColors);
        spinTimeout2 = requestAnimationFrame(rotateWheel2);
    }
    rotateWheel2();
}

function stopRotateWheel2() {
    cancelAnimationFrame(spinTimeout2);
    isSpinning2 = false;
    const degrees = startAngle2 * 180 / Math.PI + 90;
    const arc = Math.PI / (numberNames.length / 2);
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) % 360 / arcd);
    
    const winningItem = numberNames[index];
    document.getElementById('result2').textContent = winningItem ? winningItem.name : '?';
    if (!isSpinning1) handleSpinStop();
}

function handleSpinStop() {
    const winningTeam = document.getElementById('result1').textContent; 
    const winningNumber = document.getElementById('result2').textContent; 
    showCustomConfirmModal(
        'Pairing Selesai!',
        `Hasil pasangan: ${winningTeam} dan ${winningNumber}.`,
        winningTeam,
        winningNumber
    );
    toggleInputs(true);
}

function easeOut(t, b, c, d) {
    const ts = (t/=d)*t;
    const tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
}

// --- MODAL & UI ---
function createModal(title, message, options) {
    const existingModal = document.getElementById('custom-modal-overlay');
    if (existingModal) existingModal.remove();

    const overlay = document.createElement('div');
    overlay.id = 'custom-modal-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.6); display: flex; justify-content: center;
        align-items: center; z-index: 1000;
    `;

    const modalBox = document.createElement('div');
    modalBox.style.cssText = `
        background: white; padding: 30px; border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3); max-width: 450px;
        text-align: center; font-family: 'Segoe UI', sans-serif;
    `;

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;
    modalTitle.style.cssText = 'margin-top: 0; color: #0366d6;';

    const modalMessage = document.createElement('p');
    modalMessage.textContent = message;
    modalMessage.style.cssText = 'margin-bottom: 20px;';

    modalBox.appendChild(modalTitle);
    modalBox.appendChild(modalMessage);

    const buttonGroup = document.createElement('div');
    buttonGroup.style.cssText = 'display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;';

    const close = () => overlay.remove();

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option.text;
        btn.style.cssText = option.style + ' padding: 10px 15px; border-radius: 6px; border: none; cursor: pointer;';
        btn.onclick = () => {
            option.action();
            close();
        };
        buttonGroup.appendChild(btn);
    });

    modalBox.appendChild(buttonGroup);
    overlay.appendChild(modalBox);
    document.body.appendChild(overlay);
}

function showModal(title, message) {
    createModal(title, message, [{ text: 'OK', action: () => {}, style: 'background-color: #0366d6; color: white;' }]);
}

function showCustomConfirmModal(title, message, winningTeamName, winningNumberName) {
    const options = [
        { text: 'Keep Both', action: () => {}, style: 'background-color: #6a737d; color: white;' },
        { text: `Hapus ${winningTeamName}`, action: () => { removeName(winningTeamName, 'team', true); }, style: 'background-color: #0366d6; color: white;' },
        { text: `Hapus ${winningNumberName}`, action: () => { removeName(winningNumberName, 'number', true); }, style: 'background-color: #FF9800; color: white;' },
        { text: 'Hapus Keduanya', action: () => { removeName(winningTeamName, 'team', true); removeName(winningNumberName, 'number', true); }, style: 'background-color: #cb2431; color: white;' }
    ];
    createModal(title, message, options);
}

function toggleInputs(enable) {
    document.getElementById('spinButton').disabled = !enable || teamNames.length === 0 || numberNames.length === 0;
    document.getElementById('resetButton').disabled = !enable;
    document.getElementById('shuffleButton').disabled = !enable;
    document.getElementById('addNameButton').disabled = !enable;
    document.getElementById('nameInput').disabled = !enable;
    document.getElementById('addNumberButton').disabled = !enable;
    document.getElementById('numberInput').disabled = !enable;
    document.querySelectorAll('.remove-btn').forEach(btn => btn.disabled = !enable);
    document.querySelectorAll('.list-name-input').forEach(input => input.disabled = !enable);
}

function generateDefaultNumbers(count) {
    return Array.from({ length: count }, (_, i) => ({ abbr: `${i + 1}`, name: `Item ${i + 1}` }));
}

function loadLeague() {
    const select = document.getElementById('leagueSelect');
    const leagueKey = select.value;
    currentLeagueKey = leagueKey;

    if (leagueKey === 'Custom') {
        teamNames = [];
        numberNames = [];
    } else {
        const teams = TEAM_MAP[leagueKey]; 
        teamNames = [...teams].sort((a, b) => a.abbr.localeCompare(b.abbr)); 
        
        if (NUMBERS_MAP && NUMBERS_MAP[leagueKey]) {
            numberNames = [...NUMBERS_MAP[leagueKey]];
        } else {
            numberNames = generateDefaultNumbers(teams.length);
        }
    }
    updateNameList();
    updateNumberList();
    redrawWheels();
    toggleInputs(true); 
}

function resetToCurrentLeague() {
    if (isSpinning1 || isSpinning2) return;
    loadLeague();
}

function redrawWheels() {
    drawWheel(canvas1, ctx1, teamNames, startAngle1, wheelColors);
    drawWheel(canvas2, ctx2, numberNames, startAngle2, wheelColors);
    document.getElementById('result1').textContent = "?";
    document.getElementById('result2').textContent = "?";
}

function handleEdit(key, newValue, listType, isAbbrUpdate = false) {
    if (isSpinning1 || isSpinning2) return;
    if (!newValue.trim()) return;
    if (currentLeagueKey !== 'Custom') {
        currentLeagueKey = 'Custom';
        document.getElementById('leagueSelect').value = 'Custom'; 
    }
    if (listType === 'team') {
        const item = teamNames.find(t => t.abbr === key);
        if (item && isAbbrUpdate) {
            item.abbr = newValue;
            if (item.name === key) item.name = newValue;
            sortTeamNames();
            updateNameList();
            redrawWheels();
        }
    } else if (listType === 'number') {
        const item = numberNames.find(n => n.abbr === key);
        if (item) {
            item.name = newValue;
            updateNumberList(); 
            redrawWheels();
        }
    }
}

function addName() {
    if (isSpinning1 || isSpinning2) return;
    const input = document.getElementById('nameInput');
    const newAbbr = input.value.trim();
    if (newAbbr) {
        if (!teamNames.find(t => t.abbr === newAbbr)) {
            teamNames.push({ abbr: newAbbr, name: newAbbr });
            input.value = '';
            sortTeamNames();
            updateNameList();
            redrawWheels();
            document.getElementById('leagueSelect').value = 'Custom';
        } else {
            showModal('Error', 'Nama sudah ada di daftar!');
        }
    }
}

function addNumber() {
    if (isSpinning1 || isSpinning2) return;
    const input = document.getElementById('numberInput');
    const newName = input.value.trim();
    if (newName) {
        const numericalAbbrs = numberNames.map(n => parseInt(n.abbr)).filter(n => !isNaN(n));
        const maxNum = numericalAbbrs.length > 0 ? Math.max(...numericalAbbrs) : 0;
        const newAbbr = `${maxNum + 1}`;

        if (!numberNames.some(n => n.name === newName)) {
            numberNames.push({ abbr: newAbbr, name: newName });
            input.value = '';
            sortNumberNames(); 
            updateNumberList();
            redrawWheels();
            document.getElementById('leagueSelect').value = 'Custom';
        } else {
            showModal('Error', 'Deskripsi nomor sudah ada!');
        }
    }
}

function removeName(itemIdentifier, listType, isNameSearch = false) {
    if (isSpinning1 || isSpinning2) return;
    if (listType === 'team') {
        teamNames = teamNames.filter(t => isNameSearch ? t.name !== itemIdentifier : t.abbr !== itemIdentifier);
        updateNameList();
        document.getElementById('leagueSelect').value = 'Custom';
    } else if (listType === 'number') {
        numberNames = numberNames.filter(n => isNameSearch ? n.name !== itemIdentifier : n.abbr !== itemIdentifier);
        updateNumberList();
    }
    redrawWheels();
    toggleInputs(true); 
}

function sortNumberNames() {
    numberNames.sort((a, b) => {
        const numA = parseInt(a.abbr);
        const numB = parseInt(b.abbr);
        return (!isNaN(numA) && !isNaN(numB)) ? numA - numB : a.abbr.localeCompare(b.abbr);
    });
}

function sortTeamNames() {
    teamNames.sort((a, b) => a.abbr.localeCompare(b.abbr));
}

function shuffleNames() {
    if (isSpinning1 || isSpinning2) return;
    for (let i = teamNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [teamNames[i], teamNames[j]] = [teamNames[j], teamNames[i]];
    }
    for (let i = numberNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numberNames[i], numberNames[j]] = [numberNames[j], numberNames[i]];
    }
    updateNameList();
    updateNumberList();
    redrawWheels();
}

function updateList(items, ulId, listType) {
    const ul = document.getElementById(ulId);
    ul.innerHTML = '';
    items.forEach((item) => {
        const li = document.createElement('li');
        const inputContent = listType === 'team' ? item.abbr : item.name;
        const uniqueKey = item.abbr; 

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = inputContent;
        nameInput.className = 'list-name-input';
        nameInput.setAttribute('data-unique-key', uniqueKey);
        nameInput.setAttribute('data-current-value', inputContent);

        nameInput.onblur = () => {
            const key = nameInput.getAttribute('data-unique-key');
            const oldValue = nameInput.getAttribute('data-current-value');
            const newValue = nameInput.value.trim();
            if (newValue !== oldValue) {
                handleEdit(key, newValue, listType, listType === 'team');
                nameInput.setAttribute('data-current-value', newValue); 
            } else {
                nameInput.value = oldValue; 
            }
        };

        li.appendChild(nameInput);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeName(uniqueKey, listType, false); 
        li.appendChild(removeBtn);
        ul.appendChild(li);
    });
}

function updateNameList() {
    updateList(teamNames, 'nameList', 'team');
}

function updateNumberList() {
    updateList(numberNames, 'numberList', 'number');
}

(function init() {
    document.getElementById('leagueSelect').value = 'Kelas';
    loadLeague();
})();
