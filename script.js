const btn = document.getElementById("btn");
const tabel = document.getElementById("table");

btn.addEventListener("click", (e) => {

    e.preventDefault();

    const fname = document.getElementById("firstname");
    const lname = document.getElementById("lastname");
    const tel = document.getElementById("telephone");

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

    tr.innerHTML = `<td>${fname.value}</td><td>${lname.value}</td><td>${tel.value}</td>`;
    tabel.appendChild(tr);

    fname.value = "";
    lname.value = "";
    tel.value = "";
})