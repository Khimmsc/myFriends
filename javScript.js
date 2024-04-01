let friends = [];
let totalAge = 0;

// 1. DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    displayFriendCount();
});

// 2. สุ่มจำนวนเพื่อน
function displayFriendCount() {
    const friendCount = Math.floor(Math.random() * 9) + 1;
    const friendCountDiv = document.getElementById('friendCount');
    friendCountDiv.innerHTML = `จำนวนเพื่อนทั้งหมด: ${friendCount} คน`;
    
    const friendInputsDiv = document.getElementById('friendInputs');
    friendInputsDiv.innerHTML = '';

    friends = []; 
    for (let i = 0; i < friendCount; i++) {
        const nicknameInput = document.createElement('input');
        nicknameInput.type = 'text';
        nicknameInput.placeholder = `ชื่อเพื่อนคนที่ ${i + 1}`;
        nicknameInput.id = `nickname${i + 1}`;

        const ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.placeholder = `อายุเพื่อนคนที่ ${i + 1}`;
        ageInput.id = `age${i + 1}`;

        friendInputsDiv.appendChild(nicknameInput);
        friendInputsDiv.appendChild(ageInput);

      
        friends.push({
            nickname: '', 
            age: 0 
        });
       
        nicknameInput.addEventListener('input', function() {
            friends[i].nickname = this.value;
        });
       
        ageInput.addEventListener('input', function() {
            friends[i].age = parseInt(this.value);
        });
    }
}

// 3. คำนวณอายุรวมกันของเพ่ือน
function calculateTotalAge() {
    totalAge = 0;
    for (let i = 0; i < friends.length; i++) {
        totalAge += parseInt(friends[i].age);
    }
    alert(`อายุรวมกันทั้งหมด: ${totalAge} ปี`);
}

// 4. คำนวณอายุเฉลี่ย
function calculateAverageAge() {
    if (friends.length === 0) {
        alert("กรุณากรอกข้อมูล");
        return;
    }

    const averageAge = totalAge / friends.length;
    alert(`อายุเฉลี่ย: ${averageAge} ปี`);
}

// 5. หาเพื่อนที่อายุน้อยที่สุด
function findYoungestFriend() {
    if (friends.length === 0) {
        alert("กรุณากรอกข้อมูล");
        return;
    }

    let minAge = Number.MAX_VALUE;
    let youngestFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (parseInt(friends[i].age) < minAge) {
            minAge = parseInt(friends[i].age);
            youngestFriends = [friends[i]];
        } else if (parseInt(friends[i].age) === minAge) {
            youngestFriends.push(friends[i]);
        }
    }

    let message = "เพื่อนที่อายุน้อยที่สุด \n";
    youngestFriends.forEach(friend => {
        message += `ชื่อ: ${friend.nickname}, อายุ: ${friend.age}\n`;
    });
    alert(message);
}

// 6. หาเพื่อนที่อายุเยอะที่สุด
function findOldestFriend() {
    if (friends.length === 0) {
        alert("กรุณากรอกข้อมูล");
        return;
    }

    let maxAge = Number.MIN_VALUE;
    let oldestFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (parseInt(friends[i].age) > maxAge) {
            maxAge = parseInt(friends[i].age);
            oldestFriends = [friends[i]];
        } else if (parseInt(friends[i].age) === maxAge) {
            oldestFriends.push(friends[i]);
        }
    }

    let message = "เพื่อนที่อายุเยอะที่สุด \n";
    oldestFriends.forEach(friend => {
        message += `ชื่อ: ${friend.nickname} อายุ: ${friend.age}\n`;
    });
    alert(message);
}

// 7. Reset
function resetData() {
    friends = [];
    totalAge = 0;
    displayFriendCount();
}
