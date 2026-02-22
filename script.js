let total = document.getElementById('totalCount')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')

let interviews=[];
let rejected=[];

let mainContainer=document.querySelector('#main-container')
const allCardSection = document.getElementById('allCards')
let filterSection = document.getElementById('filtered-section')
let jobs=document.getElementById('jobs')
let jobsLength=allCardSection.children.length;

jobs.innerText = jobsLength + ' jobs'
interviewCount.innerText=interviews.length;
rejectedCount.innerText=rejected.length;

function countTotal() {
    total.innerText = allCardSection.children.length
}

countTotal()

const allFilterBtn = document.getElementById('allBtn')
const interviewFilterBtn = document.getElementById('interviewBtn')
const rejectedFilterBtn = document.getElementById('rejectedBtn')

function showEmptyCard () {
    const emptyCard=`<div class="empty-card"><img src="./jobs.png"/><h3>No jobs available</h3><p>Check back soon for new job opportunities</p></div>`
    document.getElementById('filtered-section').innerHTML=emptyCard
}

let activeFilter='all'

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    allFilterBtn.classList.add('bg-gray-500', 'text-white')
    interviewFilterBtn.classList.add('bg-gray-500', 'text-white')
    rejectedFilterBtn.classList.add('bg-gray-500', 'text-white')

    let selected = document.getElementById(id)

    selected.classList.remove('bg-gray-500', 'text-white')
    selected.classList.add('bg-black', 'text-white')
    // selected.addEventListener

    

    if(id=="interviewBtn") {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        jobs.innerText=interviews.length+' of '+jobsLength+' jobs'

        activeFilter = 'interview'
        
        if(interviews.length==0) {
            showEmptyCard()
            return;
        }

        renderJob('interview');

    } else if(id=="rejectedBtn") {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        jobs.innerText=rejected.length+' of '+jobsLength+' jobs'

        activeFilter = 'rejected'

        if(rejected.length==0) {
            showEmptyCard()
            return;
        }

         renderJob('rejected');
    } else {

        activeFilter='all'
        
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }

    updateCounts()
}