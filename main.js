const nameInput = document.querySelector('#name-input')
const searchBtn = document.querySelector('.search-btn')
const listName = document.querySelector('.list-names')
const modalList = document.querySelector('.modal-list')
const closeBtn = document.querySelector('.close-btn')


let list_of_names = [
    {
        name: 'clarence mayor',
        age: '19',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 2.00,
        status: 'Regular Student'
    },
    {
        name: 'abegail mendoza',
        age: '20',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 1.8,
        status: 'Deans Lister'
    },
    {
        name: 'aera campos',
        age: '19',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 1.1,
        status: 'University Scholar'
    },
    {
        name: 'dmay ramos',
        age: '19',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 1.5,
        status: 'Deans Lister'
    },
    {
        name: 'recca mae dilap dilap',
        age: '19',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 2.00,
        status: 'Regular Student'
    },
    {
        name: 'angelo muyano',
        age: '20',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 2.00,
        status: 'Regular Student'
    },
    {
        name: 'ker marty',
        age: '21',
        dep: 'BSF 2 PRMSU CANDE',
        gwa: 2.00,
        status: 'Regular Student'
    },
    {
        name: 'jherome mortil',
        age: '21',
        dep: 'BSF 2 PRMSU CANDE',
        gwa: 1.70,
        status: 'Deans Lister'
    },
    {
        name: 'yesha elacion',
        age: '19',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 2.00,
        status: 'Regular Student'
    },
    {
        name: 'john lemuel encina',
        age: '18',
        dep: 'BSIT 2 PRMSU CANDE',
        gwa: 1.24,
        status: 'University Scholar'
    },
]

let results = []

function searchName() {
    const findName = nameInput.value.trim().toLowerCase()

    const results = findName == 'all' ? list_of_names
        : list_of_names.filter(value => value.name == findName)
            
    renderNames(results)
   
}
function renderNames(arr) {

    listName.innerHTML = ''
    arr.forEach(list => {
        const studentName = list.name
        const studentDep = list.dep

        const newlist = document.createElement('p')
        newlist.innerHTML = `
       <p class="official-lists">
             ${studentName}- <span>${studentDep}</span>
        </p> `
        listName.appendChild(newlist)

        newlist.addEventListener('click', () => showModal(studentName));
    })

   
}
function showModal(clickedName) {
    const clickedIndex = list_of_names.findIndex(item => item.name === clickedName);

    if (clickedIndex !== -1) {
        renderModals(list_of_names[clickedIndex]);
    }
}


function renderModals(student) {

        const {name , age , dep, gwa, status} = student

        modalList.innerHTML = 
        ` <div class="name-section">
        <h4 class="name">
            ${name}
        </h4>
        <h4 class="age">
           ${age}
        </h4>
    </div>
    <div class="school-info">
        <h4 class="school">
           Department & Campus: <span> ${dep}</span>
        </h4>
        <h4 class="gwa">
           GWA: <span>${gwa}</span>
        </h4>
        <h4 class="status">
            Status: <span>${status}</span>
        </h4>
        <button class="close-btn" onclick="closeModal()">
            Close
        </button>
    </div> `

    modalList.style.display = 'block'


}

searchBtn.addEventListener('click', searchName)

function closeModal() {
    modalList.style.display = 'none'
}

/*
algorithm
so the first one is I created an array of objects that has all the copies of
the student list...

next one is when I click the search-btn, the input value will be on a variable
called findName.

conditioning: if all it shows all the list else the searched name will show.
filtering...

after that, I made a new function to render the searched name into the dom.

so after that I add a listener so that click is clickable to render the modal 
which contains information of that list.

another feature is that when all the list is pop-up, I need to know what list will be clicked
so that I know also what would I render and input in the modal of it.

so the student.name that rendered on the list on the renderNames is put as an argument 
to the listener that has a function of showModal.

then that clickname will find its index in the array by using findIndex
const clickedIndex = list_of_names.findIndex(item => item.name === clickedName);

if no match of that , clickedIndex will be -1 that's why there is a condition.
but if its not a -1 and someone is matched, the renderModals will popup
with the listofnames[clickedIndex].. track success for that index

then the rendermodal is responsible for popping up the other info about that student
so now i pass the argument then hold that value as a student

I use the destructuring method to easy copy the information of that student index object.
then render its content to the modalList and display a block to popup..


that's it for array iterators
function
listeners
appropriate variables
forEach (looping every content)
filtering the search
arguments
rendering the output to the dom
lemdev 2023....
*/
