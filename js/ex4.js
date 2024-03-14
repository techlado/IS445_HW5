const addCollegeOfBusinessLink = () => {
  const collegeOfBusinessLink = document.createElement('a');
  collegeOfBusinessLink.href = 'https://www.csulb.edu/college-of-business';
  collegeOfBusinessLink.textContent = 'College of Business';

  const collegeOfBusinessListItem = document.createElement('li');
  collegeOfBusinessListItem.appendChild(collegeOfBusinessLink);

  const isLink = document.getElementById('is');

  isLink.parentNode.insertBefore(collegeOfBusinessListItem, isLink);
}

addCollegeOfBusinessLink();
