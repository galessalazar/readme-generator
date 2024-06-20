function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
        
    };
    return badges[license]  || '';
  }

  
function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    const links = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    };
    return links[license] || '';
  }

  function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return '';
    }

    return `## License
    Project licensed under ${license}${renderLicenseLink}(license)
    `;
  }

  function generateMarkdown(data) {
    return `# ${data.titleOfProject}
    
    ${renderLicenseBadge(data.license)}
  
    ## Description
    ${data.Description}
  
    ## Table of Contents
    ${data.TableOfContents}
  
    ## Installation
    ${data.Installation}
  
    ## Usage
    ${data.Usage}
  
    ${renderLicenseSection(data.license)}
  
    ## Contributing
    ${data.Contributing}
  
    ## Tests
    ${data.Tests}
  
    ## Questions
    ${data.Questions}
  
     
    `;
  }
  
  module.exports = generateMarkdown;