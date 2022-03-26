const generateManagerCard = (manager) => {
    return `
        <div class="card">
            <h3>${manager.getname()}</h3>
                <p><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${mananger.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li class="list-group-item">Office number: ${manager.officeNumber()}</li>
                </ul>
            </div>
        </div>
    `;
};

const generateEngineerCard = (engineer) => {
    return `
        <div class="card">
            <h3>${engineer.getname()}</h3>
                <p><i class="fa-solid fa-mug-hot"></i>${engineer.getRole()}</p>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">Office number: ${engineer.getGitHub()}</li>
                </ul>
            </div>
        </div>
    `;
};

const generateInternCard = (intern) => {
    return `
        <div class="card">
            <h3>${intern.getname()}</h3>
                <p><i class="fa-solid fa-mug-hot"></i>${intern.getRole()}</p>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    </li>
                    <li class="list-group-item">Office number: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `;
};

const baseHtml = (htmlArr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header>
<div class="jumbotron jumbotron-fluid"> 
    <h1 class="display-4 heading"> My Team</h1>
</div>
</header>
<div id="container">
<div class="card-deck">
  ${htmlArr.join(' ')}

</div>
</div>  
</body>
</html>
`