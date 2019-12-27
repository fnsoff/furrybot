const findersUtil = {

    findMember(guild, query) {
        const search = query.toLowerCase();
        return guild.members.filter(m => m.displayName.toLowerCase().includes(search) ||
            m.user.tag.toLowerCase().includes(search) ||
            m.id === search);
    },
    formatMembers(client, list) {
        let message = `⚠ Found **${list.size}** members:\n${list.first(5).map(m => `- **${m.user.tag}** (ID:${m.id})`).join('\n')}\n`;
        if (list.size > 5) message += `and ${(list.size - 5)} more...`;
        return message;
    }
};
module.exports = findersUtil;