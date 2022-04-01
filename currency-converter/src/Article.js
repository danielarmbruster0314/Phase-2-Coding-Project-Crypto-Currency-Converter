


function Article({article}){
    
    const arrayOfImages = [
        "https://images.unsplash.com/photo-1640315852249-63951c12fccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3kifHx8fHx8MTY0ODc0NjcwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642576495099-b47977ac8dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ2NzQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1641979442372-c382287ecabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ2NzU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1640575142344-a0852022895b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ2Nzgy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1640055820387-84762905f8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ2ODEz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642239817310-e87f49fbb561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ2ODM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1628151015658-94ee5e169368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3MjMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1621761119692-595bf443cbc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3MjYw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642432556241-eba3670234eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3Mjg0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3MzAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1639486970692-0a4f469f59e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3MzI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1636467472048-99be973392b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3MzQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1615985249956-d13775508df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3MzY0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1639815188498-e23242c9c796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NDAz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1641352109623-f7b1eff605fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NDI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642320933929-f6d3a16d587d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NDYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1641784830336-a2064fc65bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NDc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NTAz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642239817395-6cfe3bada398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NTIy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1636953099671-481a72803051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NTU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1641317139750-4a25ddc7e304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NTg4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1643184983698-e04e2ee942ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NjEw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1641207455875-6a55841732f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1641932269834-af141d2c2017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3Njc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1625468743270-9c3c5b27933b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NzA5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1638913974023-cef988e81629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Q3J5cHRvY3VycmVuY3l8fHx8fHwxNjQ4NzQ3NzQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1623680994788-777595a01173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzcyMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1642432556591-72cbc671b707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzc1MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1639843885527-43b098a9661a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzc2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1597781914467-a5b93258e748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzc4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1625029031738-0a8c6514642d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzgwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1643101809652-ef56a14818ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzgxNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1609726494499-27d3e942456c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzgzNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1625806785652-f4427c3fda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzg0Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1615818733733-8b2f0e3c403a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzg2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1636587224433-3cd253788c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzg3Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1638913971789-667874197280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzg5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1639182697243-9641e4b2f4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzkxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzkzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzk4MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "https://images.unsplash.com/photo-1630048421776-1f552787465d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NDV8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1643101808200-0d159c1331f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxjcnlwdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1642413597408-183a09361cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxjcnlwdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1625806744302-7cd13216a425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0ODgzMzk0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"



    ]

    const newArray = arrayOfImages[Math.floor(Math.random()* arrayOfImages.length)]
    return(

        <li className="article">
            <div className="card">
            <div className='the-card'>
                <img className="imagesfromarticle" src={newArray} alt="cripto"/> 
            <h4>{article.title}</h4>
            <span className="lilinkbox"><a className="articlelinks" href={article.url}>Read Article </a></span>
            </div>
            </div>
        </li>
    )
}
export default Article;