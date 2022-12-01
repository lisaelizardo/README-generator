function generateMarkdown(answers) {
    /* 
    ANSWERS OBJECT
    {
        title: 'TEt tile',
        description: '',
        installation: '',
        usage: '',
        license: '',
        contributing: '',
        tests: ''
    }
    */
    console.log("this is the something paramter", answers)
    const markdownContent = `
    ## ${answers.title}
    # Description 
    ${answers.description}
    # Installtion 
    ${answers.installation}
    # Usage 
    ${answers.usage}
    # License
    ${answers.license}
    # Contributing
    ${answers.contributing}
    # Tests
    ${answers.tests}
    `
    return markdownContent
}
module.exports = generateMarkdown

