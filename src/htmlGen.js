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
    `
}