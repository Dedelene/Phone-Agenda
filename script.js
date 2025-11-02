class Person{

    static count = 0;

    constructor(fname, lname, tel){
        this.fname = fname;
        this.lname = lname;
        this.tel = tel;
        Person.count++;
    }
    
}

let persons = [];

const btn = document.getElementById("add");
const btnDel = document.getElementById("del");
const tabel = document.getElementById("table");
const count = document.getElementById("counter");

btn.addEventListener("click", () => {

    const fname = document.getElementById("firstname");
    const lname = document.getElementById("lastname");
    const tel = document.getElementById("telephone");

    if(checkError(fname.value, lname.value, tel.value)){
        return;
    }

    let person = new Person(fname.value, lname.value, tel.value);
    persons.push(person);
    counter.innerText = `Contacts: ${Person.count}`;

    if(tabel.rows.length === 0) {
        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone number</th>
            </tr>
        `;
        tabel.appendChild(thead);
        
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `<td>${person.fname}</td><td>${person.lname}</td><td>${person.tel}</td>`;
    tabel.appendChild(tr);

    fname.value = "";
    lname.value = "";
    tel.value = "";
})

function checkError(fname, lname, tel) {
    let checkError = false;
    if(!lname){
        const wrapper = document.getElementById('lastname').closest('.input');
        wrapper.classList.add('shake');
        document.getElementById('lastname').placeholder="Enter last name!";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!fname){
        const wrapper = document.getElementById('firstname').closest('.input');
        wrapper.classList.add('shake');
        document.getElementById('firstname').placeholder="Enter first name!";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!tel){
        const wrapper = document.getElementById('telephone').closest('.input');
        wrapper.classList.add('shake');
        document.getElementById('telephone').placeholder="Enter phone number!";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }

    return checkError;
}

btnDel.addEventListener("click", () => {

    const fname = document.getElementById("firstname");
    const lname = document.getElementById("lastname");
    const tel = document.getElementById("telephone");

    const i = persons.findIndex(pers => 
        pers.fname === fname.value &&
        pers.lname === lname.value &&
        pers.tel === tel.value
    );

    if(i !== -1 || !checkDelError(fname.value, lname.value, tel.value)) {
        persons.splice(i, 1);
        Person.count--;
    }else{
        return;
    }
    tabel.innerHTML = "";
    if(persons.length !== 0) {
        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone number</th>
            </tr>
        `;
        tabel.appendChild(thead);
        
    }
    
    counter.innerText = `Contacts: ${Person.count}`;

    persons.forEach(person => {
        const tr = document.createElement("tr");

        tr.innerHTML = `<td>${person.fname}</td><td>${person.lname}</td><td>${person.tel}</td>`;
        tabel.appendChild(tr);
    })
    fname.value = "";
    lname.value = "";
    tel.value = "";
});

function checkDelError(fname, lname, tel) {
    if(!lname || !personArray.some(p => p.lname === lname)){
        const wrapper = document.getElementById('lastname').closest('.input');
        wrapper.classList.add('shake');
        document.getElementById('lastname').value="";
        document.getElementById('lastname').placeholder="Try again!";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!fname || !personArray.some(p => p.fname === fname)){
        const wrapper = document.getElementById('firstname').closest('.input');
        wrapper.classList.add('shake');
        document.getElementById('firstname').value="";
        document.getElementById('firstname').placeholder="Try again!";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!tel || !personArray.some(p => p.tel === tel)){
        const wrapper = document.getElementById('telephone').closest('.input');
        wrapper.classList.add('shake');
        document.getElementById('telephone').value="";
        document.getElementById('telephone').placeholder="Try again!";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }

    return checkError;
}