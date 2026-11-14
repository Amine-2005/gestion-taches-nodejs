const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'taches_db'
});

app.get('/api/taches', async (req, res) => {
  const [lignes] = await db.query('SELECT * FROM taches ORDER BY id DESC');
  res.json(lignes);
});

app.post('/api/taches', async (req, res) => {
  const { titre } = req.body;
  if (!titre) return res.status(400).json({ erreur: 'Le titre est obligatoire' });
  const [r] = await db.query('INSERT INTO taches (titre) VALUES (?)', [titre]);
  res.status(201).json({ id: r.insertId, titre, terminee: false });
});

app.put('/api/taches/:id', async (req, res) => {
  const { terminee } = req.body;
  await db.query('UPDATE taches SET terminee = ? WHERE id = ?', [terminee, req.params.id]);
  res.json({ message: 'Tâche modifiée' });
});

app.delete('/api/taches/:id', async (req, res) => {
  await db.query('DELETE FROM taches WHERE id = ?', [req.params.id]);
  res.json({ message: 'Tâche supprimée' });
});

app.listen(3000, () => console.log('Serveur lancé : http://localhost:3000'));
