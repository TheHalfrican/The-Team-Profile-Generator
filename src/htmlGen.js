const generateManagerCard = (manager) => {
    return `
        <div class="card">
            <h3>${manager.getName()}</h3>
                <p><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `;
};

const generateEngineerCard = (engineer) => {
    return `
        <div class="card">
            <h3>${engineer.getName()}</h3>
                <p><i class="fa-solid fa-mug-hot"></i>${engineer.getRole()}</p>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    `;
};

const generateInternCard = (intern) => {
    return `
        <div class="card">
            <h3>${intern.getName()}</h3>
                <p><i class="fa-solid fa-mug-hot"></i>${intern.getRole()}</p>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    </li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../assets/style.css">
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
`


module.exports = {
    generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml
}