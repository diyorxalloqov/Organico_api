const express = require('express')
const app = express();
app.use(express.json());

var Organico = {

    "status": true,

    "Location": [
        {
            "title": "Uzbekistan"
        },
        {
            "title": "USA"
        },
        {
            "title": "England"
        },
        {
            "title": "Saudia Arabic"
        },
        {
            "title": "Brazil"
        },
    ],

    "Category": [
        {
            "title": "Vegetables",
            "img": "https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min.jpg"
        },
        {
            "title": "Fruits",
            "img": "https://thumbs.dreamstime.com/b/fruit-2999796.jpg"
        },
        {
            "title": "Meats",
            "img": "https://www.foodsafetynews.com/files/2020/06/raw-sirloin-steak-beef.jpg"
        },
        {
            "title": "Drinks",
            "img": "https://cdn.punchng.com/wp-content/uploads/2017/03/29201341/soft-drinks.png"
        },
    ],

    "Vegetables": [
        {
            "title": "Paprika",
            "price": "$4.99",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKQBNjaSmauI_b2XjJAtTqyLGHUJAlhh7sEFAZj7w04QvkXLFPbObKSaaz3O3IcbU0Ew&usqp=CAU"
        },
        {
            "title": "Broccoli",
            "price": "$4.99",
            "img": "https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min.jpg"
        },
        {
            "title": "Lettuce",
            "price": "$3.40",
            "img": "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg"
        },
        {
            "title": "Potato",
            "price": "$4.21",
            "img": "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA="
        },
        {
            "title": "Carrot",
            "price": "$4.99",
            "img": "https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858"
        },
        {
            "title": "Red onion",
            "price": "$3.30",
            "img": "https://produits.bienmanger.com/36700-0w0h0_Organic_Red_Onion_From_Italy.jpg"
        },
    ],
    "Fruits": [
        {
            "title": "Banana",
            "price": "$4.68",
            "img": "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="
        },
        {
            "title": "Apple",
            "price": "$9.99",
            "img": "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
        },

        {
            "title": "Orange",
            "price": "$5.99",
            "img": "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE="
        },
        {
            "title": "Staberry",
            "price": "$7.99",
            "img": "https://media.istockphoto.com/id/1157946861/photo/red-berry-strawberry-isolated.jpg?s=612x612&w=0&k=20&c=HyxZMbI_e-vDJbrzZkTz5zWCAo1mBEzWbvVlyigbi-E="
        },
        {
            "title": "Cherry",
            "price": "$2.99",
            "img": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Cherry_season_%2848216568227%29.jpg"
        },
        {
            "title": "Watermelon",
            "price": "$1.99",
            "img": "https://thumbs.dreamstime.com/b/big-watermelon-slice-white-background-as-package-design-element-44517200.jpg"
        },

    ],
    "Meats": [
        {
            "title": "Meat",
            "price": "$5.99",
            "img": "https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY="
        },
        {
            "title": "Sausage",
            "price": "$7.99",
            "img": "https://static.tnfoodie.in/thumb/msid-91071893,imgsize-69987,width-400,height-300,resizemode-4/pic.jpg"
        },
        {
            "title": "Kazy",
            "price": "$1.99",
            "img": "https://tastethediversity.com/wp-content/uploads/2020/02/kazy-611x350.jpeg"
        },
        {
            "title": "Minced meat",
            "price": "$5.99",
            "img": "https://ftf.odooegypt.com/web/image/product.template/4556/image"
        },
    ],
    "Drinks": [
        {
            "title": "Coca-cola",
            "price": "$1.99",
            "img": "https://www.coca-colacanada.ca/content/dam/nagbrands/ca/coke/en/specialtysoda/coca-cola-de-mexico/Coca-ColadeMexico355mLBottle-productImageSmall.png"
        },
        {
            "title": "Fanta",
            "price": "$0.99",
            "img": "https://positano.lv/wp-content/uploads/2021/11/fanta-0.5-new.png"
        },
        {
            "title": "Sprite",
            "price": "$0.55",
            "img": "https://italiospizza.com/wp-content/uploads/2023/02/510TTRVmhzL._SX522_.jpg"
        },
        {
            "title": "Flash",
            "price": "$4.99",
            "img": "https://babymarket.uz/wp-content/uploads/2020/07/flash-up_energy-drink-j-b_033-l.jpg"
        },
        {
            "title": "Red Bull",
            "price": "$5.99",
            "img": "https://media.istockphoto.com/id/458716829/photo/red-bull.jpg?s=612x612&w=0&k=20&c=0CsBVsXdrA7PV1gkUF4VHBkPGh4Vtyq9uNJAMTQObBA="
        },

    ]


}

var users = []


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    next();
});

app.post("/register", (req, res) => {
    const { email, password, } = req.body;
    if (!(email && password)) {
        return res.status(400).send({
            "message": "Email yoki password xato"
        });
    }

    // Check if user already exists
    const user = "Flutter@gmail.com";
    if (user === email) {
        return res.send({
            "isRegistered": true,
            "message": "Siz allaqachon ro'yxatdan o'tgansiz"
        });
    }

    // Register new user
    users.push(req.body);
    return res.status(201).json({
        "message": "User successfully registered",
        "access_token": "asdfgnhmjnbvcxbnvcbncxvbcxvnbmbv"
    });
});






// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     if (!(email && password)) {
//         return res.status(400).send({
//             "message": "Email yoki password xato"
//         });
//     }

//     // Check user credentials
//     const user = "d@gmail.com";
//     const userPassword = "12345";

//     if (user === email) {
//         // Login
//         if (password === userPassword) {
//             return res.status(200).json({
//                 "message": "User successfully logged in",
//                 "access_token": "sadfgghdsfghjgffgahjkljhgf",
//             });
//         } else {
//             return res.status(400).json({
//                 "message": "Email yoki parol xato",
//             });
//         }
//     } else {
//         return res.status(409).json({
//             "message": "Siz hali ro'yxatdan o'tmagansiz",
//         });
//     }
// });



app.get('/users', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    res.send(users);
});

app.put('/user/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    const { email, password, } = req.body;
    console.log(req.params.id);
    var isEdited = false;
    for (let index = 0; index < users.length; index++) {
        if (users[index]["email"] === req.params.id) {
            console.log("hello")
            users[index] = req.body;
            isEdited = true;
        } else {
            isEdited = false;
        }
    }
    if (isEdited) {
        res.status(200).json({
            "message": "User info updated"
        });
    } else {
        res.status(200).json({
            "message": "User info not updated",
            "error": "12335566532g3df"
        });
    }
});


app.get('/Organico', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    res.send(Organico);
});

let Fintech = "192.168.42.184"
let Home = "192.168.1.42";

HOST = Home;

PORT = 3000;

app.listen(PORT, () => {
    console.log(`YOUR SERVER RUNNING ON http://${HOST}:${PORT}/Organico`);
});