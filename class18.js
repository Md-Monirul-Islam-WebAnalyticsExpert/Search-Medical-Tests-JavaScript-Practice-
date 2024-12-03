var medicalTests = [
    {
        id: 101,
        test_name: "CT Scan",
        room_no: 'F3-312',
        floor: '3rd',
        technician: 'TAMIM IQBAL',
        value: 5000  
    },
    {
        id: 102,
        test_name: "MRI",
        room_no: 'F4-412',
        floor: '4th',
        technician: 'MAHMUDULLAH RIAD',
        value: 10000  
    },
    {
        id: 103,
        test_name: "Ultrasound",
        room_no: 'F5-512',
        floor: '5th',
        technician: 'MUSHFIQUR RAHIM',
        value: 2000  
    },
    {
        id: 104,
        test_name: "Colposcopy",
        room_no: 'F6-612',
        floor: '6th',
        technician: 'MASHRAFEE MURTAZA',
        value: 8000  
    },
    {
        id: 105,
        test_name: "Angiography",
        room_no: 'F7-712',
        floor: '7th',
        technician: 'LITON DAS',
        value: 7000 
    }
]

var selectedTestId = document.getElementById('dropdown-test-list');

selectedTestId.addEventListener('change', function () {
    var selectedTestIdValue = +selectedTestId.value;

    var  findTestObject = medicalTests.find( function(searchObject) {
        return searchObject.id === selectedTestIdValue
    });

    if (findTestObject) {
        document.getElementById('test-name').innerHTML = '<strong> Test Name: </strong>' + findTestObject.test_name;
        document.getElementById('room-no').innerHTML = '<strong> Roome No: </strong>' + findTestObject.room_no;
        document.getElementById('floor').innerHTML = '<strong> Floor: </strong>' + findTestObject.floor;
        document.getElementById('technician').innerHTML = '<strong> Technician: </strong>' + findTestObject.technician;
        document.getElementById('fee').innerHTML = '<strong> Fee: </strong>' + findTestObject.value;
    } else {
        document.getElementById('test-name').innerHTML = "";
        document.getElementById('room-no').innerHTML = "";
        document.getElementById('floor').innerHTML = "";
        document.getElementById('technician').innerHTML = "";
        document.getElementById('fee').innerHTML = "";
    }
});



