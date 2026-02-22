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