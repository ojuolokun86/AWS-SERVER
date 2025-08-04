// src/commands/commandRegistry.js
const { version } = require('../../../package.json');

const commandRegistry = {
    // Bot Control
    'restart': {
        description: 'Restart the bot',
        usage: 'restart',
        category: 'Bot Control',
        ownerOnly: true
    },
    'status': {
        description: 'Configure status viewing and reactions',
        usage: 'status',
        category: 'Bot Control'
    },
    'ping': {
        description: 'Check bot response time',
        usage: 'ping',
        category: 'Bot Control'
    },

    // Group Management
    'group': {
        description: 'Group management commands',
        usage: 'group [option]',
        category: 'Group',
        adminOnly: true
    },
    'kick': {
        description: 'Kick a user, all members, or inactive members',
        usage: 'kick @user | kick members | kick inactive',
        category: 'Group',
        adminOnly: true
    },
    'promote': {
        description: 'Promote a user to admin',
        usage: 'promote @user',
        category: 'Group',
        adminOnly: true
    },
    'demote': {
        description: 'Demote a user from admin',
        usage: 'demote @user',
        category: 'Group',
        adminOnly: true
    },
    'listgroup': {
        description: 'List all groups the bot is in',
        usage: 'listgroup',
        category: 'Group',
        ownerOnly: true
    },
    'mute': {
        description: 'Mute group (announcement only)',
        usage: 'mute',
        category: 'Group',
        adminOnly: true
    },
    'unmute': {
        description: 'Unmute group (allow all members)',
        usage: 'unmute',
        category: 'Group',
        adminOnly: true
    },
    'lockinfo': {
        description: 'Lock group info (admins only)',
        usage: 'lockinfo',
        category: 'Group',
        adminOnly: true
    },
    'unlockinfo': {
        description: 'Unlock group info (all members)',
        usage: 'unlockinfo',
        category: 'Group',
        adminOnly: true
    },
    'add': {
        description: 'Add a user to the group',
        usage: 'add <number>',
        category: 'Group',
        adminOnly: true
    },
    'requestlist': {
        description: 'List pending group join requests',
        usage: 'requestlist',
        category: 'Group',
        adminOnly: true
    },
    'acceptall': {
        description: 'Accept all pending join requests',
        usage: 'acceptall',
        category: 'Group',
        adminOnly: true
    },
    'rejectall': {
        description: 'Reject all pending join requests',
        usage: 'rejectall',
        category: 'Group',
        adminOnly: true
    },
    'tag': {
        description: 'Mention all group members',
        usage: 'tag [message]',
        category: 'Group',
        adminOnly: true
    },
    'tagall': {
        description: 'Mention all group members with stats',
        usage: 'tagall [message]',
        category: 'Group',
        adminOnly: true
    },
    'admin': {
        description: 'Mention all group admins',
        usage: 'admin [message]',
        category: 'Group',
        adminOnly: true
    },
    'listinactive': {
        description: 'List inactive members (no message in 30 days)',
        usage: 'listinactive',
        category: 'Group',
        adminOnly: true
    },

    // Anti-Delete & Moderation
    'antidelete': {
        description: 'Toggle anti-delete feature',
        usage: 'antidelete [on/off]',
        category: 'Moderation',
        adminOnly: true
    },
    'antilink': {
        description: 'Configure anti-link protection',
        usage: 'antilink',
        category: 'Moderation',
        adminOnly: true
    },
    'resetwarn': {
        description: 'Reset warnings for a user or all',
        usage: 'resetwarn @user | resetwarn all',
        category: 'Moderation',
        ownerOnly: true
    },
    'warnlist': {
        description: 'Show warning list for group',
        usage: 'warnlist',
        category: 'Moderation',
        adminOnly: true
    },
    'listwarn': {
        description: 'Alias for warnlist',
        usage: 'listwarn',
        category: 'Moderation',
        adminOnly: true
    },

    // Welcome
    'welcome': {
        description: 'Configure welcome/goodbye messages',
        usage: 'welcome',
        category: 'Features',
        adminOnly: true
    },

    // Media
    'sticker': {
        description: 'Create sticker from image/video/GIF',
        usage: 'sticker (reply to image/video/GIF)',
        category: 'Media'
    },
    'stimage': {
        description: 'Convert sticker to image',
        usage: 'stimage (reply to sticker)',
        category: 'Media'
    },
    'sttoimg': {
        description: 'Alias for stimage',
        usage: 'sttoimg (reply to sticker)',
        category: 'Media'
    },
    'stgif': {
        description: 'Convert animated sticker to GIF',
        usage: 'stgif (reply to animated sticker)',
        category: 'Media'
    },
    'ss': {
        description: 'Take a screenshot of a website',
        usage: 'ss [url]',
        category: 'Media'
    },
    'ssweb': {
        description: 'Alias for ss',
        usage: 'ssweb [url]',
        category: 'Media'
    },
    'screenshot': {
        description: 'Alias for ss',
        usage: 'screenshot [url]',
        category: 'Media'
    },

    // Music
    'play': {
        description: 'Play a song from YouTube',
        usage: 'play [song name]',
        category: 'Music'
    },
    'song': {
        description: 'Download a song from YouTube',
        usage: 'song [song name or link]',
        category: 'Music'
    },

    // Poll
    'poll': {
        description: 'Create a poll',
        usage: 'poll <question> | <option1> | <option2> ...',
        category: 'Utilities',
        adminOnly: true
    },

    // Privacy & Settings
    'privacy': {
        description: 'Configure privacy settings',
        usage: 'privacy',
        category: 'Settings',
        ownerOnly: true
    },
    'setprofile': {
        description: 'Bot profile settings (name, pic, bio, blocklist)',
        usage: 'setprofile',
        category: 'Settings',
        ownerOnly: true
    },
    'disappear': {
        description: 'Configure disappearing messages',
        usage: 'disappear',
        category: 'Settings',
        ownerOnly: true
    },
    'disappearing': {
        description: 'Alias for disappear',
        usage: 'disappearing',
        category: 'Settings',
        ownerOnly: true
    },
    'mode': {
        description: 'Set bot mode (public/private/admin)',
        usage: 'mode [public|private|admin]',
        category: 'Settings',
        ownerOnly: true
    },
    'prefix': {
        description: 'Set bot command prefix',
        usage: 'prefix <new_prefix>',
        category: 'Settings',
        ownerOnly: true
    },
    'settings': {
        description: 'Show bot settings',
        usage: 'settings',
        category: 'Settings',
        ownerOnly: true
    },

    // Utilities
    'help': {
        description: 'Show help information',
        usage: 'help [command]',
        category: 'Utilities'
    },
    'h': {
        description: 'Alias for help',
        usage: 'h [command]',
        category: 'Utilities'
    },
    'ajuda': {
        description: 'Alias for help',
        usage: 'ajuda [command]',
        category: 'Utilities'
    },
    'menu': {
        description: 'Show command menu',
        usage: 'menu',
        category: 'Utilities'
    },
    'info': {
        description: 'Show bot/server/system info',
        usage: 'info',
        category: 'Utilities'
    },
    'report': {
        description: 'Report an issue to the developers',
        usage: 'report [your message]',
        category: 'Utilities'
    },
    'react': {
        description: 'Toggle command reaction (emoji)',
        usage: 'react on/off',
        category: 'Utilities',
        ownerOnly: true
    },
    'online': {
        description: 'Configure bot presence (online/typing/recording)',
        usage: 'online',
        category: 'Utilities',
        ownerOnly: true
    },

    // Status & View Once
    'vv': {
        description: 'Repost view-once media to chat',
        usage: 'vv (reply to view-once media)',
        category: 'Utilities'
    },
    'view': {
        description: 'Send view-once media to your DM',
        usage: 'view (reply to view-once media)',
        category: 'Utilities'
    },

    // Fun & AI
    'imagine': {
        description: 'Generate an AI image from a prompt',
        usage: 'imagine <prompt>',
        category: 'Fun'
    },
    'echo': {
        description: 'Echo back your message',
        usage: 'echo <text>',
        category: 'Fun'
    }
};

// Add aliases
commandRegistry.h = commandRegistry.help;
commandRegistry.ajuda = commandRegistry.help;

// Group commands by category
const commandsByCategory = {};
Object.entries(commandRegistry).forEach(([cmd, info]) => {
    if (!commandsByCategory[info.category]) {
        commandsByCategory[info.category] = [];
    }
    commandsByCategory[info.category].push({name: cmd, ...info});
});

module.exports = { commandRegistry, commandsByCategory, version };