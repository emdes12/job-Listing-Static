//importing data
const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,  
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
]

//selectors
const job = document.querySelector('.job');
const navig = document.getElementById('navig');
const clearFilter = document.querySelector('.clear-filter')
const filterBody = document.querySelector('.filter')
const filterSearch = document.querySelector('.filter-search')
const main = document.querySelector('#main')

//show job list

function showList (dataJob) {
  job.innerHTML = "";

    for (var i = 0; i < dataJob.length; i++) {
        //create li.job-list
        const jobList = document.createElement("li");
        jobList.innerText = '';
        jobList.classList.add("job-list");
        job.appendChild(jobList);

        //create div.comp-logo
        const compLogo = document.createElement("div")
        compLogo.classList.add('comp-logo');
        jobList.appendChild(compLogo);

        //creat img#comp-logo
        imgCompLogo = document.createElement('img');
        imgCompLogo.classList.add('img-comp-logo');
        imgCompLogo.setAttribute('id', dataJob[i].id)
        compLogo.appendChild(imgCompLogo);
        imgCompLogo.setAttribute('src', dataJob[i].logo)

        //create and append div.job-details
        const jobDetails = document.createElement('div')
        jobDetails.classList.add('job-details');
        jobList.appendChild(jobDetails)

        //create div.upline
        const upLine = document.createElement('div')
        upLine.classList.add('upline')
        jobDetails.appendChild(upLine)

        //create div.comp-name append to upline
        const compName = document.createElement('div')
        compName.classList.add('comp-name')
        upLine.appendChild(compName)
        compName.textContent = dataJob[i].company

        //create div.tag-new append to upline
        const tagNew = document.createElement('div')
        tagNew.classList.add('tag-new')
        upLine.appendChild(tagNew)
        let newTag;
        switch (dataJob[i].new) {
            case true :
                newTag = 'NEW';
                break; 
            default:
                newTag = null;
                tagNew.style.display = 'none'
        }
        tagNew.textContent = newTag;

        //create div.tag-featured append to upline
        const tagFeatured = document.createElement('div')
        tagFeatured.classList.add('tag-featured')
        upLine.appendChild(tagFeatured)
        let feat;
        switch (dataJob[i].featured) {
            case true :
                feat = 'FEATURED';
                jobList.classList.add('featured')
                break; 
            default:
                feat = null;
                tagFeatured.style.display = 'none'
        }
        tagFeatured.textContent = feat;

        //create div.post-vacant
        const postVacant = document.createElement('div')
        postVacant.classList.add('post-vacant')
        jobDetails.appendChild(postVacant)
        postVacant.textContent = dataJob[i].position;

        //create div.job-request
        const jobRequest = document.createElement('div')
        jobRequest.classList.add('job-request')
        jobDetails.appendChild(jobRequest)

        //create span.posted-time append to jobRequest
        const postTime = document.createElement('span')
        postTime.textContent = dataJob[i].postedAt
        jobRequest.appendChild(postTime)

        //add &#183; (.) to jobRequest
        jobRequest.innerHTML += ' &#183; ';

        //create span.contract append to jobRequest
        const contractType = document.createElement('span')
        contractType.textContent = dataJob[i].contract
        jobRequest.appendChild(contractType)

        //add &#183; (.) to jobRequest
        jobRequest.innerHTML += ' &#183; ';

        //create span.location append to jobRequest
        const countryLocation = document.createElement('span')
        countryLocation.textContent = dataJob[i].location
        jobRequest.appendChild(countryLocation)

        //create div.job-skills and append to jobList
        const jobSkills = document.createElement('div')
        jobSkills.classList.add('job-skills')
        jobList.appendChild(jobSkills)

        //create div.filter-search for role and append to jobSkills
        const roleDiv = document.createElement('div')
        roleDiv.classList.add('filter-search')
        roleDiv.setAttribute('id', 'skills')
        jobSkills.appendChild(roleDiv)
        roleDiv.textContent = dataJob[i].role;
        jobList.classList.add(dataJob[i].role)

        let roleInput = dataJob[i].role;

        roleDiv.addEventListener('click', roleInsert)
        
        function roleInsert () {
            filterEnter.push(roleInput)
            console.log(filterEnter)
            filterList2Show(roleInput)
            filterBody.innerHTML += `<div class="filter-search">
            <li>
            ${roleInput}
            </li>
  
            <div class="clear-icon" onclick="clearMe(this)">
              <img src="/images/icon-remove.svg" alt="icon-remove">
            </div>
          </div>`;
          navig.style.display = 'flex'
          roleDiv.removeEventListener('click', roleInsert)
        }

        //new loop for skills-require
        for (var j = 0; j < dataJob[i].languages.length; j++) {
            //create div.filter-search for skills require
            const skillsRequire = document.createElement('div')
            skillsRequire.classList.add('filter-search')
            skillsRequire.classList.add('skills')
            jobSkills.appendChild(skillsRequire)
            skillsRequire.textContent = dataJob[i].languages[j];
            jobList.classList.add(dataJob[i].languages[j])
            
            let skillInput = dataJob[i].languages[j];

            
            
            skillsRequire.addEventListener('click', skillInsert)
            function skillInsert() {
                filterEnter.push(skillInput)
                console.log(filterEnter)
                filterListShow(skillInput);
                filterBody.innerHTML += `<div class="filter-search">
                <li>
                ${skillInput}
                </li>
      
                <div class="clear-icon" onclick="clearMe(this)">
                  <img src="/images/icon-remove.svg" alt="icon-remove">
                </div>
              </div>`;
              navig.style.display = 'flex';
              skillsRequire.removeEventListener('click', skillInsert)
            }
        }

        let filterEnter = [];
    }

}



showList(data)


function filterListShow(skillRole){

  let store = []
  for (let i = 0; i < data.length; i++) {
    let lang = []
    
    for (let j = 0; j < data[i].languages.length; j++) {
      
      if(data[i].languages[j] === skillRole) {
          lang = data[i]
          store.push(lang)
      } 
    } 
  }
  showList(store)
}

function filterList2Show(skillRole){

  let store = []
  for (let i = 0; i < data.length; i++) {
    let lang = []
    
      
      if(data[i].role === skillRole) {
          lang = data[i]
          store.push(lang)
      } 
  }
  showList(store)
}

function clearMe(e) {
  e.parentElement.remove()
}

clearFilter.addEventListener('click', () => {
    filterBody.innerHTML = '';
    navig.style.display = 'none'
    console.log('remove')
    showList(data)
})

function listEvent()  {
    document.querySelector('.filter-search').style.display = 'none'
    console.log('remove')
}
