
function generateMarkDown(data) {
    return `# ${data.title}
    ## License:
    [![license](https://img.sheilds.io/badge/license-${data.license}-blue.svg)]

    ## Table of Contents
    -[Description] (#description)
    -[Installation] (#installation)
    -[Usage] (#sage)
    -[Contribution] (#contribution)
    -[Testing] (#testing)
    -[Additional Info] (#additional-info)

    ## Description
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contribution
    ${data.contribution}
    ## Testing
    ${data.test}

## Contact Information:
- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}] (oraanlevi1@gmail.com)`;
}

module.exports = generateMarkDown