const sendToChat = require('../../utils/sendToChat');
const { getContextInfo, getForwardedContext } = require('../../utils/contextInfo');
const { version } = require('../../../package.json');

const getMainMenu = (
  ownerName = 'Unknown',
  mode = 'private',
  phoneNumber = 'Unknown',
) => `
🖥️ *SYSTEM CONTROL PANEL INITIALIZED*
━━━━━━━━━━━━━━━━━━━━━━━━━━
> **Operator:** ${ownerName}
> **Mode:** ${mode.toUpperCase()}
> **System ID:** ${phoneNumber}
> **Firmware:** v${version}
━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 *CORE COMMANDS*
> ping → Check bot responsiveness
> settings → Configure system settings
> prefix → Change command prefix
> mode → Switch system mode
> help → Command manual
> menu → Display system menu
> info → System information
> restart → Reboot system

🛡️ *MODERATION & SECURITY*
> antilink → Block external links
> warnlist → View warnings
> antidelete → Monitor message deletions
> privacy → Configure privacy
> disappear → Enable disappearing messages

📦 *GROUP MANAGEMENT*
> listgroup → List all groups
> tag → Tag a user
> tagall → Mention all members
> mute / unmute → Silence or activate chat
> lockinfo / unlockinfo → Lock or unlock group info
> add / kick → Add or remove members
> promote / demote → Manage roles
> poll → Create a poll
> group link → Fetch invite link
> group stats → Display group stats
> listinactive → View inactive members

🎨 *MEDIA & FUN*
> sticker → Convert image/video to sticker
> stimage → Sticker to image
> stgif → Sticker to GIF
> ss → Take screenshot of a webpage
> imagine → Generate AI image
> song → Download audio
> play → Play music

🔧 *UTILITIES*
> status → View system uptime
> vv → View once media
> view → View profile info
> online → Show online members
> setprofile → Update profile
> report → Send a report

━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ *EXECUTION MODE*: Reply with a command to run.
ℹ️ *Use help <command> for command details.*
⚠️ *Root access unlocks advanced privileges.*
━━━━━━━━━━━━━━━━━━━━━━━━━━
Follow us on whatsapp channel click view channel
`;



async function menu(sock, chatId, message, ownerName, mode, phoneNumber) {
  const menuText = getMainMenu(ownerName, mode, phoneNumber);
  const contextInfo = {
    ...getContextInfo(),
    ...getForwardedContext()
  };

  const sent = await sock.sendMessage(chatId, {
    text: menuText,
    contextInfo,
    quoted: message
  });

  const menuMsgId = sent.key.id;

  // Listener for user response after menu
  const listener = async (m) => {
    const { execute } = require('../commandHandler');
    const reply = m.messages?.[0];
    if (!reply || reply.key.remoteJid !== chatId) return;

    const quotedId = reply.message?.extendedTextMessage?.contextInfo?.stanzaId;
    if (quotedId !== menuMsgId) return;

    const text = reply.message?.conversation || reply.message?.extendedTextMessage?.text || '';
    const input = text.trim().toLowerCase();

    await execute({
      sock,
      msg: reply,
      textMsg: input,
      phoneNumber: null
    });

    sock.ev.off('messages.upsert', listener); // Remove listener after execution
  };

  sock.ev.on('messages.upsert', listener);
}

module.exports = { menu };
