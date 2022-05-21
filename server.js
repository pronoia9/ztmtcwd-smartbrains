const express = require('express');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(express.json());

// TEMPORARY
const database = {
  users: [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      password: 'Bret',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      password: 'Antonette',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      password: 'Samantha',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      password: 'Karianne',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      password: 'Kamren',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      password: 'Leopoldo_Corkery',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      password: 'Elwyn.Skiles',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      password: 'Maxime_Nienow',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      password: 'Delphine',
      entries: 0,
      joined: new Date(),
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      password: 'Moriah.Stanton',
      entries: 0,
      joined: new Date(),
    },
  ],
};

/****************************************  ROOT  ****************************************/
app.get('/', (req, res) => {
  res.send('this is working');
});
/**************************************  ROOT END  **************************************/

/**************************************** SIGNIN ****************************************/
app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  // check whatever we get (what the user enters)
  // check it against a database
  // bcrypt.compare('bacon', hash, function (err, res) {
  //   // res == true
  // });

  if ((username === database.users[0].username || username === database.users[0].email) && password === database.users[0].password) {
    res.json('success');
  } else {
    res.json('error logging in');
  }
  res.json('signin got post');
});
/*************************************  SIGNIN END  *************************************/

/**************************************  REGISTER  **************************************/
app.post('/register', (req, res) => {
  // check if its an existing user (username/email)
  const { email, username, password } = req.body;

  bcrypt.hash(password, null, null, (err, hash) => {
    console.log(hash);
  });

  if (email && username && password) {
    database.users.push({ id: 11, name: '', username: username, email: email, password: password, entries: 0, joined: new Date() });
    res.json(database.users[database.users.length - 1]);
  } else {
    res.json('there was an error registering');
  }

  res.json('register got post');
});
/************************************  REGISTER END  ************************************/

/***************************************  PROFILE  **************************************/
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  database.users.forEach((user) => {
    if (user.id.toString() === id.toString()) {
      return res.json(user);
    }
  });

  res.status(400).json('no such user');
});
/*************************************  PROFILE END  ************************************/

/****************************************  IMAGE  ***************************************/
app.put('/image', (req, res) => {
  const { id } = req.body;
  database.users.forEach((user) => {
    if (user.id.toString() === id.toString()) {
      user.entries++;
      return res.json(user.entries);
    }
  });

  res.status(400).json('no such user');
});
/**************************************  IMAGE END  *************************************/

app.listen(3000, () => console.log('app is running on port 3000'));

const search = (mode, search) => {
  return database.users.filter((user) => {
    switch (mode) {
      case 'id':
        if (user.id.toString() === search.toString()) { return user; }
        break;
      case 'username':
        if (user.username === search) { return user; }
        break;
      case 'email':
        if (user.email === search) { return user; }
        break;
      default:
        break;
    }
    return null;
  });
};
