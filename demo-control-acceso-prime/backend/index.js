const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const upload = multer({ dest: path.join(__dirname, 'uploads') });
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/visitors', async (req, res) => {
  try {
    const visitors = await prisma.visitor.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(visitors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

app.post('/visitors', async (req, res) => {
  const { name, id_card, bio_uid } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  try {
    const visitor = await prisma.visitor.create({ data: { name, idCard: id_card || null, bioUid: bio_uid || null } });
    res.json(visitor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

app.post('/access', upload.single('image'), async (req, res) => {
  const { method, uid } = req.body; // method: 'card'|'bio'|'manual'
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    let visitor = null;
    if (method === 'card') {
      visitor = await prisma.visitor.findFirst({ where: { idCard: uid } });
    } else if (method === 'bio') {
      visitor = await prisma.visitor.findFirst({ where: { bioUid: uid } });
    }

    const allowed = !!visitor;

    await prisma.accessLog.create({ data: { visitorId: visitor ? visitor.id : null, method, methodUid: uid, allowed, imagePath: image } });

    res.json({ allowed, visitor: visitor || null, image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

app.get('/access-logs', async (req, res) => {
  try {
    const logs = await prisma.accessLog.findMany({
      include: { visitor: true },
      orderBy: { createdAt: 'desc' },
      take: 200
    });
    // map to similar shape used previously
    const mapped = logs.map(l => ({
      id: l.id,
      visitor_id: l.visitorId,
      method: l.method,
      method_uid: l.methodUid,
      allowed: l.allowed ? 1 : 0,
      image_path: l.imagePath,
      created_at: l.createdAt,
      visitor_name: l.visitor ? l.visitor.name : null
    }));
    res.json(mapped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on port ${port}`));

