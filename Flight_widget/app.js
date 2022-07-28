const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "8:11",
        destination: "OMAN",
        flight: "0X 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 320",
        gate: "C 31",
        remarks: "CANCELLED"
    },
    {
        time: "13:21",
        destination: "DUBAI",
        flight: "DBX 201",
        gate: "A 19",
        remarks: "CANCELLED"
    },
    {
        time: "14:01",
        destination: "FRANKFURT",
        flight: "FR 402",
        gate: "B 02",
        remarks: "ON TIME"
    },
    {
        time: "15:22",
        destination: "TOKYO",
        flight: "TK 211",
        gate: "A 32",
        remarks: "DELAYED"
    }
]

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')
        for(const flightDetail in flight) {
            const tableCell = document.createElement("td")
            console.log('flightDetail', flightDetail)
        }
        tableBody.append(tableRow)
    }
}

populateTable()