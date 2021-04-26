const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your program?',
    },
    {
      type: 'input',
      name: 'about',
      message: 'What does your Program do?',
    },
    {
      type: 'checkbox',
      message: 'What languages did you use to create this program?',
      name: 'usage',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'JQuery', 'APIs', 'Bootstrap'],
    },
    {
      type: 'input',
      name: 'moreUsage',
      message: 'What Usage instructions would you like to provide the user?',
    },
    
    {
      type: 'input',
      name: 'install',
      message: 'What installation instructions would you like to provide to a user?',
    },
    {
      type: 'list',
      message: 'Do you want Contributors to be able to make Pull Requests?',
      name: 'pullRequest',
      choices: ['Yes', 'No'],
    },
    {
      type: 'input',
      name: 'cons',
      message: 'What other contribution instructions would you like to provide to a user?',
    },
    
    {
      type: 'input',
      name: 'help',
      message: 'if you want provide contact info(email) if user needs help',
    },
    
    {
      type: 'list',
      message: 'What license do you wish to have for your program?',
      name: 'license',
      choices: ['MIT', 'openSource'],
    },
    
  ])
  .then((data) => {
    
    fs.appendFile('README.md', 'NAME \n' + data.title + '\n\n', (err) =>
    err ? console.error(err) : console.log('Success!'));
    
    fs.appendFile('README.md', 'DESCRIPTION \n' + data.about + '\n\n', (err) =>
    err ? console.error(err) : console.log('Success!'));
            
    var languageStr=" ";
    for(var i=0;i<=3;i++)if(data.usage[i]!= null)languageStr=languageStr + ' ' + data.usage[i];
    
    fs.appendFile('README.md', 'USAGE \n' + 'This program was created using the following languages' + languageStr + '\nOther Instructions:' + data.moreUsage  + '\n\n', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
        
    fs.appendFile('README.md', 'INSTALLATION \n'  + data.install + '\n\n', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
    var conStr=" ";
    if(data.pullRequest == 'Yes')conStr+='Pull Requests Welcome'; 
    else conStr+=data.cons;
    fs.appendFile('README.md', 'CONTRIBUTIONS \n' + ' ' + conStr + '\n\n', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
    fs.appendFile('README.md', 'ASSISTANCE \n' + 'Help with program: ' + data.help + '\n\n', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
    fs.appendFile('README.md', 'LICENSE \n' + 'This program is licensed by ' + data.license + '\n\n', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
    

  });

  
