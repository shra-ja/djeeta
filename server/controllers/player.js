const bot = require('../discord/bot');

exports.index = (req, res) => {
  const servers = bot.client.player.getGuilds();

  res.json({ servers: servers });
}

exports.playlist = (req, res) => {
  const queue = bot.client.player.getQueue(req.params.id).map(infomap => {
    const {sid, info} = infomap;
    return {id: sid, title: info.title, url: info.video_url, image: info.iurlhq};
  });

  res.json({ id: req.params.id, queue: queue });
}

exports.addSong = (req, res) => {
  const guildId = req.body.id;
  const url = req.body.url;

  bot.client.player.queueSong(guildId, url, res);
}