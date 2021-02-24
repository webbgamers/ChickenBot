let Discord = require("discord.js");
exports.execute = async (client, message, args) => {
    let gif = client.arrayRandom(client.gifs["pat"]);
    let outstr;
    let ping = args[0]?.match(/<@!?(\d+)>/);
    let target;
    if (ping && ping[1]) {
        let user = await client.users.fetch(ping[1]);
        if (user) target = user.username;
        else target = args.join(" ");
    } else target = args.join(" ");
    
    let name;
    if (message.member) {
        name = message.member.displayName;
    } else {
        name = message.author.username;
    }
    if (target) outstr = `${name} pats ${target}`;
    if (!outstr || outstr == "") outstr = `${name} needs pats...`;
    let embed = new Discord.MessageEmbed()
        .setImage(gif)
        .setColor("RANDOM")
        .setTitle(outstr)
        .setFooter("Hosted by weeb.sh");
    message.channel.send(embed);
};

exports.data = {
    permissions: 18432,
    guildOnly: false,
    aliases: ["headpat"],
    name: "pat",
    desc: "Give somebody headpats",
    usage: "pat [Mention/Text]",
    perm: 0
};