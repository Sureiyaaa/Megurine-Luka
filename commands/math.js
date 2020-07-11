const Discord = require("discord.js"),
math = require('math-expression-evaluator');
exports.run = async (client, message, args) => {  
    
    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor(0xff5bc3);
    
    // Verify Input
    if (!args[0]) {
        
        // Configure Embed
        embed.setFooter('Please input an expression.');
        
        // Return & Send Embed
        return message.channel.send(embed);
        
    }
    
    // Evaluate Expression
    let result;
    try {
        
        result = math.eval(args.join(' '));
        
    } catch (e) { // This will catch any errors in the expression
        
        result = 'Error: "Invalid Input"';
        
    }
        
    
    // Configure Embed
    embed.addField('Problem', `\`\`\`js\n${args.join(' ')}\`\`\``)
         .addField('Answer', `\`\`\`js\n${result}\`\`\``);
         
    // Send Embed
    message.channel.send(embed);
  
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["math"],
  permLevel: 0,
};

exports.help = {
  name: "math",
  description: "math.",
  usage: "math <expression>",
};