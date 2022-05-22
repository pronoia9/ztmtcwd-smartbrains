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
/****************************************************************************************/



/**************************************** SIGNIN ****************************************/
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) { return res.json('both fields are required'); }

  // bcrypt.compare(password, hash, function (err, res) {
  //   console.log('first guess', res);
  // });

  if (search('password', username, password)) { return res.json('success'); }
  res.json('error logging in');
});
/****************************************************************************************/



/**************************************  REGISTER  **************************************/
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) { return res.json('missing a field'); }
  if (search('email', email))           { return res.json('email already registered'); }
  if (search('username', username))     { return res.json('username taken'); }

  // bcrypt.hash(password, null, null, (err, hash) => {
  //   console.log(hash);
  // });

  database.users.push({
    id: 11,
    name: '',
    username: username,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});
/****************************************************************************************/



/***************************************  PROFILE  **************************************/
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  const user = search('id', id);
  return user ? res.json(user) : res.status(400).json('no such user');
});
/****************************************************************************************/



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
/****************************************************************************************/



/***********************************  OTHER FUNCTIONS  **********************************/
const search = (mode, search, pwd = null) => {
  return (!mode || !search) ? null : database.users.find((user) => {
    if      (mode === 'id'       && user.id.toString() === search.toString())                                     { return user; }
    else if (mode === 'username' && user.username === search)                                                     { return user; }
    else if (mode === 'email'    && user.email === search)                                                        { return user; }
    else if (mode === 'password' && (user.email === search || user.username === search) && user.password === pwd) { return user; }
  })
};
/****************************************************************************************/



app.listen(3000, () => console.log('app is running on port 3000'));