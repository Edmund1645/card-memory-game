const emojis = [
  '⌚',
  '⏩',
  '⏪',
  '⏫',
  '⏰',
  '⏳',
  '◽',
  '☔',
  '♈',
  '♉',
  '♊',
  '♋',
  '♌',
  '♍',
  '♎',
  '♏',
  '♐',
  '♑',
  '♒',
  '♿',
  '⚓',
  '⚡',
  '⚪',
  '⚽',
  '⛄',
  '⛎',
  '⛔',
  '⛪',
  '⛲',
  '⛵',
  '⛺',
  '⛽',
  '✅',
  '✊',
  '✨',
  '❌',
  '❎',
  '❓',
  '❔',
  '❗',
  '➕',
  '➖',
  '➰',
  '➿',
  '⬛',
  '⭐',
  '⭕',
  '🀄',
  '🃏',
  '🆎',
  '🆑',
  '🆒',
  '🆓',
  '🆔',
  '🆕',
  '🆖',
  '🆗',
  '🆘',
  '🆙',
  '🈁',
  '🈚',
  '🈯',
  '🈲',
  '🈳',
  '🈴',
  '🈵',
  '🈸',
  '🈹',
  '🉐',
  '🌀',
  '🌁',
  '🌂',
  '🌃',
  '🌄',
  '🌅',
  '🌆',
  '🌇',
  '🌈',
  '🌉',
  '🌊',
  '🌋',
  '🌍',
  '🌏',
  '🌐',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌖',
  '🌗',
  '🌙',
  '🌚',
  '🌛',
  '🌜',
  '🌝',
  '🌟',
  '🌭',
  '🌮',
  '🌰',
  '🌲',
  '🌴',
  '🌷',
  '🌸',
  '🌹',
  '🌺',
  '🌻',
  '🌼',
  '🌽',
  '🌾',
  '🌿',
  '🍀',
  '🍁',
  '🍂',
  '🍃',
  '🍄',
  '🍅',
  '🍆',
  '🍇',
  '🍈',
  '🍉',
  '🍋',
  '🍌',
  '🍍',
  '🍎',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🍔',
  '🍕',
  '🍖',
  '🍗',
  '🍘',
  '🍙',
  '🍚',
  '🍛',
  '🍜',
  '🍝',
  '🍞',
  '🍟',
  '🍠',
  '🍡',
  '🍢',
  '🍣',
  '🍤',
  '🍥',
  '🍦',
  '🍧',
  '🍨',
  '🍩',
  '🍪',
  '🍫',
  '🍬',
  '🍭',
  '🍮',
  '🍯',
  '🍰',
  '🍱',
  '🍲',
  '🍳',
  '🍴',
  '🍵',
  '🍶',
  '🍷',
  '🍸',
  '🍹',
  '🍺',
  '🍼',
  '🍾',
  '🎀',
  '🎁',
  '🎂',
  '🎃',
  '🎄',
  '🎅',
  '🎆',
  '🎇',
  '🎈',
  '🎉',
  '🎊',
  '🎋',
  '🎌',
  '🎍',
  '🎎',
  '🎏',
  '🎐',
  '🎑',
  '🎒',
  '🎠',
  '🎡',
  '🎢',
  '🎣',
  '🎤',
  '🎥',
  '🎦',
  '🎧',
  '🎨',
  '🎩',
  '🎪',
  '🎫',
  '🎬',
  '🎭',
  '🎮',
  '🎯',
  '🎰',
  '🎱',
  '🎲',
  '🎳',
  '🎴',
  '🎵',
  '🎶',
  '🎷',
  '🎸',
  '🎹',
  '🎺',
  '🎻',
  '🎼',
  '🎽',
  '🎾',
  '🎿',
  '🏀',
  '🏁',
  '🏂',
  '🏃',
  '🏅',
  '🏆',
  '🏇',
  '🏈',
  '🏉',
  '🏊',
  '🏏',
  '🏐',
  '🏑',
  '🏒',
  '🏠',
  '🏡',
  '🏢',
  '🏤',
  '🏥',
  '🏦',
  '🏧',
  '🏨',
  '🏩',
  '🏪',
  '🏫',
  '🏬',
  '🏭',
  '🏮',
  '🏯',
  '🏴',
  '🏸',
  '🏹',
  '🏺',
  '🏻',
  '🏼',
  '🏽',
  '🏾',
  '🏿',
  '🐀',
  '🐁',
  '🐂',
  '🐃',
  '🐄',
  '🐅',
  '🐆',
  '🐈',
  '🐉',
  '🐊',
  '🐌',
  '🐍',
  '🐏',
  '🐑',
  '🐓',
  '🐔',
  '🐕',
  '🐖',
  '🐗',
  '🐘',
  '🐙',
  '🐚',
  '🐛',
  '🐜',
  '🐝',
  '🐞',
  '🐟',
  '🐠',
  '🐡',
  '🐢',
  '🐣',
  '🐤',
  '🐥',
  '🐦',
  '🐧',
  '🐨',
  '🐪',
  '🐫',
  '🐬',
  '🐭',
  '🐮',
  '🐯',
  '🐰',
  '🐱',
  '🐲',
  '🐳',
  '🐴',
  '🐵',
  '🐶',
  '🐷',
  '🐸',
  '🐹',
  '🐺',
  '🐻',
  '🐼',
  '🐽',
  '👀',
  '👂',
  '👃',
  '👄',
  '👅',
  '👆',
  '👇',
  '👈',
  '👉',
  '👊',
  '👋',
  '👌',
  '👍',
  '👎',
  '👏',
  '👐',
  '👑',
  '👒',
  '👓',
  '👔',
  '👕',
  '👖',
  '👗',
  '👘',
  '👙',
  '👚',
  '👛',
  '👜',
  '👝',
  '👞',
  '👟',
  '👠',
  '👡',
  '👢',
  '👣',
  '👥',
  '👦',
  '👧',
  '👨',
  '👩',
  '👪',
  '👬',
  '👮',
  '👯',
  '👰',
  '👱',
  '👲',
  '👳',
  '👴',
  '👵',
  '👶',
  '👷',
  '👸',
  '👹',
  '👺',
  '👻',
  '👼',
  '👽',
  '👾',
  '👿',
  '💀',
  '💁',
  '💂',
  '💃',
  '💄',
  '💅',
  '💆',
  '💇',
  '💈',
  '💉',
  '💊',
  '💋',
  '💌',
  '💍',
  '💎',
  '💏',
  '💐',
  '💑',
  '💒',
  '💓',
  '💔',
  '💕',
  '💖',
  '💗',
  '💘',
  '💙',
  '💚',
  '💛',
  '💜',
  '💝',
  '💞',
  '💟',
  '💠',
  '💡',
  '💢',
  '💣',
  '💤',
  '💥',
  '💦',
  '💧',
  '💨',
  '💩',
  '💪',
  '💫',
  '💭',
  '💮',
  '💯',
  '💰',
  '💱',
  '💲',
  '💳',
  '💴',
  '💶',
  '💸',
  '💹',
  '💺',
  '💻',
  '💼',
  '💽',
  '💾',
  '💿',
  '📀',
  '📁',
  '📂',
  '📃',
  '📄',
  '📅',
  '📆',
  '📇',
  '📈',
  '📉',
  '📊',
  '📋',
  '📌',
  '📍',
  '📎',
  '📏',
  '📐',
  '📑',
  '📒',
  '📓',
  '📔',
  '📕',
  '📖',
  '📗',
  '📘',
  '📙',
  '📚',
  '📛',
  '📜',
  '📝',
  '📞',
  '📟',
  '📠',
  '📡',
  '📢',
  '📣',
  '📤',
  '📥',
  '📦',
  '📧',
  '📨',
  '📩',
  '📪',
  '📬',
  '📮',
  '📯',
  '📰',
  '📱',
  '📲',
  '📳',
  '📵',
  '📶',
  '📸',
  '📹',
  '📺',
  '📻',
  '📿',
  '🔀',
  '🔁',
  '🔃',
  '🔄',
  '🔅',
  '🔆',
  '🔈',
  '🔉',
  '🔊',
  '🔋',
  '🔌',
  '🔍',
  '🔎',
  '🔏',
  '🔐',
  '🔑',
  '🔒',
  '🔓',
  '🔕',
  '🔖',
  '🔗',
  '🔘',
  '🔙',
  '🔚',
  '🔛',
  '🔜',
  '🔝',
  '🔞',
  '🔟',
  '🔠',
  '🔡',
  '🔢',
  '🔣',
  '🔤',
  '🔥',
  '🔦',
  '🔧',
  '🔨',
  '🔩',
  '🔪',
  '🔬',
  '🔮',
  '🔯',
  '🔰',
  '🔱',
  '🔲',
  '🔳',
  '🔴',
  '🔵',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
  '🔺',
  '🔻',
  '🔼',
  '🕋',
  '🕌',
  '🕍',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕜',
  '🕝',
  '🕞',
  '🕟',
  '🕠',
  '🕡',
  '🕢',
  '🕣',
  '🕤',
  '🕥',
  '🕦',
  '🕺',
  '🖕',
  '🖤',
  '🗻',
  '🗼',
  '🗽',
  '🗾',
  '😀',
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😇',
  '😉',
  '😊',
  '😋',
  '😌',
  '😎',
  '😏',
  '😐',
  '😑',
  '😒',
  '😓',
  '😕',
  '😖',
  '😗',
  '😘',
  '😙',
  '😚',
  '😛',
  '😜',
  '😝',
  '😟',
  '😠',
  '😡',
  '😢',
  '😣',
  '😤',
  '😦',
  '😨',
  '😩',
  '😪',
  '😬',
  '😭',
  '😮',
  '😰',
  '😱',
  '😲',
  '😴',
  '😵',
  '😶',
  '😷',
  '😸',
  '😹',
  '😺',
  '😻',
  '😼',
  '😽',
  '😾',
  '😿',
  '🙁',
  '🙂',
  '🙃',
  '🙅',
  '🙆',
  '🙇',
  '🙈',
  '🙉',
  '🙊',
  '🙋',
  '🙌',
  '🙍',
  '🙎',
  '🚀',
  '🚁',
  '🚃',
  '🚄',
  '🚆',
  '🚇',
  '🚈',
  '🚉',
  '🚊',
  '🚌',
  '🚍',
  '🚎',
  '🚏',
  '🚐',
  '🚑',
  '🚒',
  '🚔',
  '🚕',
  '🚖',
  '🚗',
  '🚘',
  '🚙',
  '🚛',
  '🚜',
  '🚝',
  '🚞',
  '🚟',
  '🚠',
  '🚢',
  '🚣',
  '🚤',
  '🚦',
  '🚧',
  '🚨',
  '🚩',
  '🚪',
  '🚫',
  '🚬',
  '🚮',
  '🚯',
  '🚰',
  '🚲',
  '🚳',
  '🚴',
  '🚶',
  '🚷',
  '🚹',
  '🚺',
  '🚻',
  '🚼',
  '🚽',
  '🚿',
  '🛀',
  '🛁',
  '🛂',
  '🛃',
  '🛄',
  '🛌',
  '🛐',
  '🛑',
  '🛕',
  '🛖',
  '🛜',
  '🛝',
  '🛞',
  '🛫',
  '🛴',
  '🛵',
  '🛷',
  '🛹',
  '🛺',
  '🛻',
  '🟠',
  '🟡',
  '🟢',
  '🟣',
  '🟤',
  '🟥',
  '🟦',
  '🟧',
  '🟨',
  '🟩',
  '🟪',
  '🟰',
  '🤌',
  '🤍',
  '🤎',
  '🤐',
  '🤑',
  '🤒',
  '🤓',
  '🤔',
  '🤕',
  '🤖',
  '🤗',
  '🤙',
  '🤚',
  '🤛',
  '🤜',
  '🤝',
  '🤟',
  '🤠',
  '🤡',
  '🤢',
  '🤣',
  '🤤',
  '🤥',
  '🤦',
  '🤨',
  '🤩',
  '🤪',
  '🤫',
  '🤬',
  '🤭',
  '🤮',
  '🤰',
  '🤱',
  '🤳',
  '🤴',
  '🤵',
  '🤶',
  '🤷',
  '🤸',
  '🤹',
  '🤼',
  '🤽',
  '🤿',
  '🥀',
  '🥁',
  '🥂',
  '🥃',
  '🥄',
  '🥇',
  '🥈',
  '🥉',
  '🥊',
  '🥌',
  '🥍',
  '🥎',
  '🥐',
  '🥑',
  '🥒',
  '🥓',
  '🥔',
  '🥕',
  '🥖',
  '🥗',
  '🥘',
  '🥙',
  '🥚',
  '🥛',
  '🥜',
  '🥝',
  '🥟',
  '🥠',
  '🥡',
  '🥢',
  '🥣',
  '🥤',
  '🥥',
  '🥦',
  '🥧',
  '🥨',
  '🥩',
  '🥪',
  '🥬',
  '🥭',
  '🥮',
  '🥯',
  '🥱',
  '🥲',
  '🥳',
  '🥴',
  '🥵',
  '🥷',
  '🥹',
  '🥺',
  '🥻',
  '🥼',
  '🥽',
  '🥾',
  '🦀',
  '🦁',
  '🦂',
  '🦃',
  '🦅',
  '🦆',
  '🦇',
  '🦈',
  '🦉',
  '🦊',
  '🦋',
  '🦌',
  '🦍',
  '🦎',
  '🦏',
  '🦐',
  '🦒',
  '🦓',
  '🦔',
  '🦕',
  '🦖',
  '🦘',
  '🦙',
  '🦚',
  '🦛',
  '🦜',
  '🦝',
  '🦞',
  '🦟',
  '🦠',
  '🦡',
  '🦣',
  '🦥',
  '🦦',
  '🦧',
  '🦨',
  '🦩',
  '🦫',
  '🦬',
  '🦮',
  '🦰',
  '🦱',
  '🦲',
  '🦳',
  '🦴',
  '🦵',
  '🦶',
  '🦷',
  '🦸',
  '🦺',
  '🦻',
  '🦼',
  '🦽',
  '🦾',
  '🧀',
  '🧁',
  '🧃',
  '🧄',
  '🧅',
  '🧆',
  '🧇',
  '🧈',
  '🧉',
  '🧋',
  '🧌',
  '🧍',
  '🧎',
  '🧐',
  '🧑',
  '🧒',
  '🧓',
  '🧔',
  '🧕',
  '🧖',
  '🧗',
  '🧘',
  '🧙',
  '🧚',
  '🧛',
  '🧜',
  '🧝',
  '🧞',
  '🧟',
  '🧠',
  '🧡',
  '🧢',
  '🧣',
  '🧤',
  '🧥',
  '🧧',
  '🧨',
  '🧩',
  '🧪',
  '🧫',
  '🧬',
  '🧭',
  '🧮',
  '🧯',
  '🧰',
  '🧱',
  '🧲',
  '🧳',
  '🧴',
  '🧵',
  '🧶',
  '🧷',
  '🧸',
  '🧹',
  '🧺',
  '🧻',
  '🧼',
  '🧽',
  '🧾',
  '🩰',
  '🩱',
  '🩲',
  '🩴',
  '🩵',
  '🩶',
  '🩸',
  '🩹',
  '🩻',
  '🪀',
  '🪁',
  '🪃',
  '🪄',
  '🪅',
  '🪇',
  '🪐',
  '🪑',
  '🪒',
  '🪓',
  '🪔',
  '🪖',
  '🪗',
  '🪘',
  '🪙',
  '🪚',
  '🪛',
  '🪜',
  '🪝',
  '🪞',
  '🪟',
  '🪠',
  '🪡',
  '🪢',
  '🪣',
  '🪤',
  '🪥',
  '🪦',
  '🪧',
  '🪩',
  '🪪',
  '🪫',
  '🪭',
  '🪮',
  '🪰',
  '🪱',
  '🪲',
  '🪳',
  '🪴',
  '🪵',
  '🪷',
  '🪸',
  '🪹',
  '🪻',
  '🪼',
  '🪿',
  '🫀',
  '🫁',
  '🫃',
  '🫄',
  '🫎',
  '🫐',
  '🫑',
  '🫒',
  '🫓',
  '🫔',
  '🫕',
  '🫗',
  '🫘',
  '🫚',
  '🫠',
  '🫡',
  '🫢',
  '🫣',
  '🫤',
  '🫥',
  '🫦',
  '🫨',
  '🫰',
  '🫱',
  '🫲',
  '🫳',
  '🫴',
  '🫵',
  '🫷',
  '©️',
  '®️',
  '‼️',
  '⁉️',
  '™️',
  'ℹ️',
  '↔️',
  '↕️',
  '↖️',
  '↗️',
  '↘️',
  '↙️',
  '↩️',
  '↪️',
  '⌨️',
  '⏏️',
  '⏭️',
  '⏮️',
  '⏯️',
  '⏱️',
  '⏲️',
  '⏸️',
  '⏹️',
  '⏺️',
  'Ⓜ️',
  '▪️',
  '▫️',
  '▶️',
  '◀️',
  '◻️',
  '◼️',
  '☀️',
  '☁️',
  '☂️',
  '☃️',
  '☄️',
  '☎️',
  '☑️',
  '☘️',
  '☝️',
  '☠️',
  '☢️',
  '☣️',
  '☦️',
  '☪️',
  '☮️',
  '☯️',
  '☸️',
  '☹️',
  '☺️',
  '♀️',
  '♂️',
  '♟️',
  '♠️',
  '♣️',
  '♥️',
  '♦️',
  '♨️',
  '♻️',
  '♾️',
  '⚒️',
  '⚔️',
  '⚕️',
  '⚖️',
  '⚗️',
  '⚙️',
  '⚛️',
  '⚜️',
  '⚠️',
  '⚧️',
  '⚰️',
  '⚱️',
  '⛈️',
  '⛏️',
  '⛑️',
  '⛓️',
  '⛩️',
  '⛰️',
  '⛱️',
  '⛴️',
  '⛷️',
  '⛸️',
  '⛹️',
  '✂️',
  '✈️',
  '✉️',
  '✌️',
  '✍️',
  '✏️',
  '✒️',
  '✔️',
  '✖️',
  '✝️',
  '✡️',
  '✳️',
  '✴️',
  '❄️',
  '❇️',
  '❣️',
  '❤️',
  '➡️',
  '⤴️',
  '⤵️',
  '⬅️',
  '⬆️',
  '⬇️',
  '〰️',
  '〽️',
  '㊗️',
  '㊙️',
  '🅰️',
  '🅱️',
  '🅾️',
  '🅿️',
  '🈂️',
  '🈷️',
  '🌡️',
  '🌤️',
  '🌥️',
  '🌦️',
  '🌧️',
  '🌨️',
  '🌩️',
  '🌪️',
  '🌫️',
  '🌬️',
  '🌶️',
  '🍽️',
  '🎖️',
  '🎗️',
  '🎙️',
  '🎚️',
  '🎛️',
  '🎞️',
  '🎟️',
  '🏋️',
  '🏌️',
  '🏍️',
  '🏎️',
  '🏔️',
  '🏕️',
  '🏖️',
  '🏗️',
  '🏘️',
  '🏙️',
  '🏚️',
  '🏛️',
  '🏜️',
  '🏝️',
  '🏞️',
  '🏟️',
  '🏳️',
  '🏵️',
  '🏷️',
  '🐿️',
  '👁️',
  '📽️',
  '🕉️',
  '🕊️',
  '🕯️',
  '🕰️',
  '🕳️',
  '🕴️',
  '🕵️',
  '🕶️',
  '🕷️',
  '🕸️',
  '🕹️',
  '🖇️',
  '🖊️',
  '🖋️',
  '🖌️',
  '🖍️',
  '🖐️',
  '🖥️',
  '🖨️',
  '🖱️',
  '🖲️',
  '🖼️',
  '🗂️',
  '🗃️',
  '🗄️',
  '🗑️',
  '🗒️',
  '🗓️',
  '🗜️',
  '🗝️',
  '🗞️',
  '🗡️',
  '🗣️',
  '🗨️',
  '🗯️',
  '🗳️',
  '🗺️',
  '🛋️',
  '🛍️',
  '🛎️',
  '🛏️',
  '🛠️',
  '🛡️',
  '🛢️',
  '🛣️',
  '🛤️',
  '🛥️',
  '🛩️',
  '🛰️',
  '🛳️',
  '#️⃣',
  '*️⃣',
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '🇦🇨',
  '🇦🇩',
  '🇦🇪',
  '🇦🇫',
  '🇦🇬',
  '🇦🇮',
  '🇦🇱',
  '🇦🇲',
  '🇦🇴',
  '🇦🇶',
  '🇦🇷',
  '🇦🇸',
  '🇦🇹',
  '🇦🇺',
  '🇦🇼',
  '🇦🇽',
  '🇦🇿',
  '🇧🇦',
  '🇧🇧',
  '🇧🇩',
  '🇧🇪',
  '🇧🇫',
  '🇧🇬',
  '🇧🇭',
  '🇧🇮',
  '🇧🇯',
  '🇧🇱',
  '🇧🇲',
  '🇧🇳',
  '🇧🇴',
  '🇧🇶',
  '🇧🇷',
  '🇧🇸',
  '🇧🇹',
  '🇧🇻',
  '🇧🇼',
  '🇧🇾',
  '🇧🇿',
  '🇨🇦',
  '🇨🇨',
  '🇨🇩',
  '🇨🇫',
  '🇨🇬',
  '🇨🇭',
  '🇨🇮',
  '🇨🇰',
  '🇨🇱',
  '🇨🇲',
  '🇨🇳',
  '🇨🇴',
  '🇨🇵',
  '🇨🇷',
  '🇨🇺',
  '🇨🇻',
  '🇨🇼',
  '🇨🇽',
  '🇨🇾',
  '🇨🇿',
  '🇩🇪',
  '🇩🇬',
  '🇩🇯',
  '🇩🇰',
  '🇩🇲',
  '🇩🇴',
  '🇩🇿',
  '🇪🇦',
  '🇪🇨',
  '🇪🇪',
  '🇪🇬',
  '🇪🇭',
  '🇪🇷',
  '🇪🇸',
  '🇪🇹',
  '🇪🇺',
  '🇫🇮',
  '🇫🇯',
  '🇫🇰',
  '🇫🇲',
  '🇫🇴',
  '🇫🇷',
  '🇬🇦',
  '🇬🇧',
  '🇬🇩',
  '🇬🇪',
  '🇬🇫',
  '🇬🇬',
  '🇬🇭',
  '🇬🇮',
  '🇬🇱',
  '🇬🇲',
  '🇬🇳',
  '🇬🇵',
  '🇬🇶',
  '🇬🇷',
  '🇬🇸',
  '🇬🇹',
  '🇬🇺',
  '🇬🇼',
  '🇬🇾',
  '🇭🇰',
  '🇭🇲',
  '🇭🇳',
  '🇭🇷',
  '🇭🇹',
  '🇭🇺',
  '🇮🇨',
  '🇮🇩',
  '🇮🇪',
  '🇮🇱',
  '🇮🇲',
  '🇮🇳',
  '🇮🇴',
  '🇮🇶',
  '🇮🇷',
  '🇮🇸',
  '🇮🇹',
  '🇯🇪',
  '🇯🇲',
  '🇯🇴',
  '🇯🇵',
  '🇰🇪',
  '🇰🇬',
  '🇰🇭',
  '🇰🇮',
  '🇰🇲',
  '🇰🇳',
  '🇰🇵',
  '🇰🇷',
  '🇰🇼',
  '🇰🇾',
  '🇰🇿',
  '🇱🇦',
  '🇱🇧',
  '🇱🇨',
  '🇱🇮',
  '🇱🇰',
  '🇱🇷',
  '🇱🇸',
  '🇱🇹',
  '🇱🇺',
  '🇱🇻',
  '🇱🇾',
  '🇲🇦',
  '🇲🇨',
  '🇲🇩',
  '🇲🇪',
  '🇲🇫',
  '🇲🇬',
  '🇲🇭',
  '🇲🇰',
  '🇲🇱',
  '🇲🇲',
  '🇲🇳',
  '🇲🇴',
  '🇲🇵',
  '🇲🇶',
  '🇲🇷',
  '🇲🇸',
  '🇲🇹',
  '🇲🇺',
  '🇲🇻',
  '🇲🇼',
  '🇲🇽',
  '🇲🇾',
  '🇲🇿',
  '🇳🇦',
  '🇳🇨',
  '🇳🇪',
  '🇳🇫',
  '🇳🇬',
  '🇳🇮',
  '🇳🇱',
  '🇳🇴',
  '🇳🇵',
  '🇳🇷',
  '🇳🇺',
  '🇳🇿',
  '🇴🇲',
  '🇵🇦',
  '🇵🇪',
  '🇵🇫',
  '🇵🇬',
  '🇵🇭',
  '🇵🇰',
  '🇵🇱',
  '🇵🇲',
  '🇵🇳',
  '🇵🇷',
  '🇵🇸',
  '🇵🇹',
  '🇵🇼',
  '🇵🇾',
  '🇶🇦',
  '🇷🇪',
  '🇷🇴',
  '🇷🇸',
  '🇷🇺',
  '🇷🇼',
  '🇸🇦',
  '🇸🇧',
  '🇸🇨',
  '🇸🇩',
  '🇸🇪',
  '🇸🇬',
  '🇸🇭',
  '🇸🇮',
  '🇸🇯',
  '🇸🇰',
  '🇸🇱',
  '🇸🇲',
  '🇸🇳',
  '🇸🇴',
  '🇸🇷',
  '🇸🇸',
  '🇸🇹',
  '🇸🇻',
  '🇸🇽',
  '🇸🇾',
  '🇸🇿',
  '🇹🇦',
  '🇹🇨',
  '🇹🇩',
  '🇹🇫',
  '🇹🇬',
  '🇹🇭',
  '🇹🇯',
  '🇹🇰',
  '🇹🇱',
  '🇹🇲',
  '🇹🇳',
  '🇹🇴',
  '🇹🇷',
  '🇹🇹',
  '🇹🇻',
  '🇹🇼',
  '🇹🇿',
  '🇺🇦',
  '🇺🇬',
  '🇺🇲',
  '🇺🇳',
  '🇺🇸',
  '🇺🇾',
  '🇺🇿',
  '🇻🇦',
  '🇻🇨',
  '🇻🇪',
  '🇻🇬',
  '🇻🇮',
  '🇻🇳',
  '🇻🇺',
  '🇼🇫',
  '🇼🇸',
  '🇽🇰',
  '🇾🇪',
  '🇾🇹',
  '🇿🇦',
  '🇿🇲',
  '🇿🇼',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  '☝🏻',
  '☝🏼',
  '☝🏽',
  '☝🏾',
  '☝🏿',
  '⛹🏻',
  '⛹🏼',
  '⛹🏽',
  '⛹🏾',
  '⛹🏿',
  '✊🏻',
  '✊🏼',
  '✊🏽',
  '✊🏾',
  '✊🏿',
  '✋🏻',
  '✋🏼',
  '✋🏽',
  '✋🏾',
  '✋🏿',
  '✌🏻',
  '✌🏼',
  '✌🏽',
  '✌🏾',
  '✌🏿',
  '✍🏻',
  '✍🏼',
  '✍🏽',
  '✍🏾',
  '✍🏿',
  '🎅🏻',
  '🎅🏼',
  '🎅🏽',
  '🎅🏾',
  '🎅🏿',
  '🏂🏻',
  '🏂🏼',
  '🏂🏽',
  '🏂🏾',
  '🏂🏿',
  '🏃🏻',
  '🏃🏼',
  '🏃🏽',
  '🏃🏾',
  '🏃🏿',
  '🏄🏻',
  '🏄🏼',
  '🏄🏽',
  '🏄🏾',
  '🏄🏿',
  '🏇🏻',
  '🏇🏼',
  '🏇🏽',
  '🏇🏾',
  '🏇🏿',
  '🏊🏻',
  '🏊🏼',
  '🏊🏽',
  '🏊🏾',
  '🏊🏿',
  '🏋🏻',
  '🏋🏼',
  '🏋🏽',
  '🏋🏾',
  '🏋🏿',
  '🏌🏻',
  '🏌🏼',
  '🏌🏽',
  '🏌🏾',
  '🏌🏿',
  '👂🏻',
  '👂🏼',
  '👂🏽',
  '👂🏾',
  '👂🏿',
  '👃🏻',
  '👃🏼',
  '👃🏽',
  '👃🏾',
  '👃🏿',
  '👆🏻',
  '👆🏼',
  '👆🏽',
  '👆🏾',
  '👆🏿',
  '👇🏻',
  '👇🏼',
  '👇🏽',
  '👇🏾',
  '👇🏿',
  '👈🏻',
  '👈🏼',
  '👈🏽',
  '👈🏾',
  '👈🏿',
  '👉🏻',
  '👉🏼',
  '👉🏽',
  '👉🏾',
  '👉🏿',
  '👊🏻',
  '👊🏼',
  '👊🏽',
  '👊🏾',
  '👊🏿',
  '👋🏻',
  '👋🏼',
  '👋🏽',
  '👋🏾',
  '👋🏿',
  '👌🏻',
  '👌🏼',
  '👌🏽',
  '👌🏾',
  '👌🏿',
  '👍🏻',
  '👍🏼',
  '👍🏽',
  '👍🏾',
  '👍🏿',
  '👎🏻',
  '👎🏼',
  '👎🏽',
  '👎🏾',
  '👎🏿',
  '👏🏻',
  '👏🏼',
  '👏🏽',
  '👏🏾',
  '👏🏿',
  '👐🏻',
  '👐🏼',
  '👐🏽',
  '👐🏾',
  '👐🏿',
  '👦🏻',
  '👦🏼',
  '👦🏽',
  '👦🏾',
  '👦🏿',
  '👧🏻',
  '👧🏼',
  '👧🏽',
  '👧🏾',
  '👧🏿',
  '👨🏻',
  '👨🏼',
  '👨🏽',
  '👨🏾',
  '👨🏿',
  '👩🏻',
  '👩🏼',
  '👩🏽',
  '👩🏾',
  '👩🏿',
  '👫🏻',
  '👫🏼',
  '👫🏽',
  '👫🏾',
  '👫🏿',
  '👬🏻',
  '👬🏼',
  '👬🏽',
  '👬🏾',
  '👬🏿',
  '👭🏻',
  '👭🏼',
  '👭🏽',
  '👭🏾',
  '👭🏿',
  '👮🏻',
  '👮🏼',
  '👮🏽',
  '👮🏾',
  '👮🏿',
  '👰🏻',
  '👰🏼',
  '👰🏽',
  '👰🏾',
  '👰🏿',
  '👱🏻',
  '👱🏼',
  '👱🏽',
  '👱🏾',
  '👱🏿',
  '👲🏻',
  '👲🏼',
  '👲🏽',
  '👲🏾',
  '👲🏿',
  '👳🏻',
  '👳🏼',
  '👳🏽',
  '👳🏾',
  '👳🏿',
  '👴🏻',
  '👴🏼',
  '👴🏽',
  '👴🏾',
  '👴🏿',
  '👵🏻',
  '👵🏼',
  '👵🏽',
  '👵🏾',
  '👵🏿',
  '👶🏻',
  '👶🏼',
  '👶🏽',
  '👶🏾',
  '👶🏿',
  '👷🏻',
  '👷🏼',
  '👷🏽',
  '👷🏾',
  '👷🏿',
  '👸🏻',
  '👸🏼',
  '👸🏽',
  '👸🏾',
  '👸🏿',
  '👼🏻',
  '👼🏼',
  '👼🏽',
  '👼🏾',
  '👼🏿',
  '💁🏻',
  '💁🏼',
  '💁🏽',
  '💁🏾',
  '💁🏿',
  '💂🏻',
  '💂🏼',
  '💂🏽',
  '💂🏾',
  '💂🏿',
  '💃🏻',
  '💃🏼',
  '💃🏽',
  '💃🏾',
  '💃🏿',
  '💅🏻',
  '💅🏼',
  '💅🏽',
  '💅🏾',
  '💅🏿',
  '💆🏻',
  '💆🏼',
  '💆🏽',
  '💆🏾',
  '💆🏿',
  '💇🏻',
  '💇🏼',
  '💇🏽',
  '💇🏾',
  '💇🏿',
  '💏🏻',
  '💏🏼',
  '💏🏽',
  '💏🏾',
  '💏🏿',
  '💑🏻',
  '💑🏼',
  '💑🏽',
  '💑🏾',
  '💑🏿',
  '💪🏻',
  '💪🏼',
  '💪🏽',
  '💪🏾',
  '💪🏿',
  '🕴🏻',
  '🕴🏼',
  '🕴🏽',
  '🕴🏾',
  '🕴🏿',
  '🕵🏻',
  '🕵🏼',
  '🕵🏽',
  '🕵🏾',
  '🕵🏿',
  '🕺🏻',
  '🕺🏼',
  '🕺🏽',
  '🕺🏾',
  '🕺🏿',
  '🖐🏻',
  '🖐🏼',
  '🖐🏽',
  '🖐🏾',
  '🖐🏿',
  '🖕🏻',
  '🖕🏼',
  '🖕🏽',
  '🖕🏾',
  '🖕🏿',
  '🖖🏻',
  '🖖🏼',
  '🖖🏽',
  '🖖🏾',
  '🖖🏿',
  '🙅🏻',
  '🙅🏼',
  '🙅🏽',
  '🙅🏾',
  '🙅🏿',
  '🙆🏻',
  '🙆🏼',
  '🙆🏽',
  '🙆🏾',
  '🙆🏿',
  '🙇🏻',
  '🙇🏼',
  '🙇🏽',
  '🙇🏾',
  '🙇🏿',
  '🙋🏻',
  '🙋🏼',
  '🙋🏽',
  '🙋🏾',
  '🙋🏿',
  '🙌🏻',
  '🙌🏼',
  '🙌🏽',
  '🙌🏾',
  '🙌🏿',
  '🙍🏻',
  '🙍🏼',
  '🙍🏽',
  '🙍🏾',
  '🙍🏿',
  '🙎🏻',
  '🙎🏼',
  '🙎🏽',
  '🙎🏾',
  '🙎🏿',
  '🙏🏻',
  '🙏🏼',
  '🙏🏽',
  '🙏🏾',
  '🙏🏿',
  '🚣🏻',
  '🚣🏼',
  '🚣🏽',
  '🚣🏾',
  '🚣🏿',
  '🚴🏻',
  '🚴🏼',
  '🚴🏽',
  '🚴🏾',
  '🚴🏿',
  '🚵🏻',
  '🚵🏼',
  '🚵🏽',
  '🚵🏾',
  '🚵🏿',
  '🚶🏻',
  '🚶🏼',
  '🚶🏽',
  '🚶🏾',
  '🚶🏿',
  '🛀🏻',
  '🛀🏼',
  '🛀🏽',
  '🛀🏾',
  '🛀🏿',
  '🛌🏻',
  '🛌🏼',
  '🛌🏽',
  '🛌🏾',
  '🛌🏿',
  '🤌🏻',
  '🤌🏼',
  '🤌🏽',
  '🤌🏾',
  '🤌🏿',
  '🤏🏻',
  '🤏🏼',
  '🤏🏽',
  '🤏🏾',
  '🤏🏿',
  '🤘🏻',
  '🤘🏼',
  '🤘🏽',
  '🤘🏾',
  '🤘🏿',
  '🤙🏻',
  '🤙🏼',
  '🤙🏽',
  '🤙🏾',
  '🤙🏿',
  '🤚🏻',
  '🤚🏼',
  '🤚🏽',
  '🤚🏾',
  '🤚🏿',
  '🤛🏻',
  '🤛🏼',
  '🤛🏽',
  '🤛🏾',
  '🤛🏿',
  '🤜🏻',
  '🤜🏼',
  '🤜🏽',
  '🤜🏾',
  '🤜🏿',
  '🤝🏻',
  '🤝🏼',
  '🤝🏽',
  '🤝🏾',
  '🤝🏿',
  '🤞🏻',
  '🤞🏼',
  '🤞🏽',
  '🤞🏾',
  '🤞🏿',
  '🤟🏻',
  '🤟🏼',
  '🤟🏽',
  '🤟🏾',
  '🤟🏿',
  '🤦🏻',
  '🤦🏼',
  '🤦🏽',
  '🤦🏾',
  '🤦🏿',
  '🤰🏻',
  '🤰🏼',
  '🤰🏽',
  '🤰🏾',
  '🤰🏿',
  '🤱🏻',
  '🤱🏼',
  '🤱🏽',
  '🤱🏾',
  '🤱🏿',
  '🤲🏻',
  '🤲🏼',
  '🤲🏽',
  '🤲🏾',
  '🤲🏿',
  '🤳🏻',
  '🤳🏼',
  '🤳🏽',
  '🤳🏾',
  '🤳🏿',
  '🤴🏻',
  '🤴🏼',
  '🤴🏽',
  '🤴🏾',
  '🤴🏿',
  '🤵🏻',
  '🤵🏼',
  '🤵🏽',
  '🤵🏾',
  '🤵🏿',
  '🤶🏻',
  '🤶🏼',
  '🤶🏽',
  '🤶🏾',
  '🤶🏿',
  '🤷🏻',
  '🤷🏼',
  '🤷🏽',
  '🤷🏾',
  '🤷🏿',
  '🤸🏻',
  '🤸🏼',
  '🤸🏽',
  '🤸🏾',
  '🤸🏿',
  '🤹🏻',
  '🤹🏼',
  '🤹🏽',
  '🤹🏾',
  '🤹🏿',
  '🤽🏻',
  '🤽🏼',
  '🤽🏽',
  '🤽🏾',
  '🤽🏿',
  '🤾🏻',
  '🤾🏼',
  '🤾🏽',
  '🤾🏾',
  '🤾🏿',
  '🥷🏻',
  '🥷🏼',
  '🥷🏽',
  '🥷🏾',
  '🥷🏿',
  '🦵🏻',
  '🦵🏼',
  '🦵🏽',
  '🦵🏾',
  '🦵🏿',
  '🦶🏻',
  '🦶🏼',
  '🦶🏽',
  '🦶🏾',
  '🦶🏿',
  '🦸🏻',
  '🦸🏼',
  '🦸🏽',
  '🦸🏾',
  '🦸🏿',
  '🦹🏻',
  '🦹🏼',
  '🦹🏽',
  '🦹🏾',
  '🦹🏿',
  '🦻🏻',
  '🦻🏼',
  '🦻🏽',
  '🦻🏾',
  '🦻🏿',
  '🧍🏻',
  '🧍🏼',
  '🧍🏽',
  '🧍🏾',
  '🧍🏿',
  '🧎🏻',
  '🧎🏼',
  '🧎🏽',
  '🧎🏾',
  '🧎🏿',
  '🧏🏻',
  '🧏🏼',
  '🧏🏽',
  '🧏🏾',
  '🧏🏿',
  '🧑🏻',
  '🧑🏼',
  '🧑🏽',
  '🧑🏾',
  '🧑🏿',
  '🧒🏻',
  '🧒🏼',
  '🧒🏽',
  '🧒🏾',
  '🧒🏿',
  '🧓🏻',
  '🧓🏼',
  '🧓🏽',
  '🧓🏾',
  '🧓🏿',
  '🧔🏻',
  '🧔🏼',
  '🧔🏽',
  '🧔🏾',
  '🧔🏿',
  '🧕🏻',
  '🧕🏼',
  '🧕🏽',
  '🧕🏾',
  '🧕🏿',
  '🧖🏻',
  '🧖🏼',
  '🧖🏽',
  '🧖🏾',
  '🧖🏿',
  '🧗🏻',
  '🧗🏼',
  '🧗🏽',
  '🧗🏾',
  '🧗🏿',
  '🧘🏻',
  '🧘🏼',
  '🧘🏽',
  '🧘🏾',
  '🧘🏿',
  '🧙🏻',
  '🧙🏼',
  '🧙🏽',
  '🧙🏾',
  '🧙🏿',
  '🧚🏻',
  '🧚🏼',
  '🧚🏽',
  '🧚🏾',
  '🧚🏿',
  '🧛🏻',
  '🧛🏼',
  '🧛🏽',
  '🧛🏾',
  '🧛🏿',
  '🧜🏻',
  '🧜🏼',
  '🧜🏽',
  '🧜🏾',
  '🧜🏿',
  '🧝🏻',
  '🧝🏼',
  '🧝🏽',
  '🧝🏾',
  '🧝🏿',
  '🫃🏻',
  '🫃🏼',
  '🫃🏽',
  '🫃🏾',
  '🫃🏿',
  '🫄🏻',
  '🫄🏼',
  '🫄🏽',
  '🫄🏾',
  '🫄🏿',
  '🫅🏻',
  '🫅🏼',
  '🫅🏽',
  '🫅🏾',
  '🫅🏿',
  '🫰🏻',
  '🫰🏼',
  '🫰🏽',
  '🫰🏾',
  '🫰🏿',
  '🫱🏻',
  '🫱🏼',
  '🫱🏽',
  '🫱🏾',
  '🫱🏿',
  '🫲🏻',
  '🫲🏼',
  '🫲🏽',
  '🫲🏾',
  '🫲🏿',
  '🫳🏻',
  '🫳🏼',
  '🫳🏽',
  '🫳🏾',
  '🫳🏿',
  '🫴🏻',
  '🫴🏼',
  '🫴🏽',
  '🫴🏾',
  '🫴🏿',
  '🫵🏻',
  '🫵🏼',
  '🫵🏽',
  '🫵🏾',
  '🫵🏿',
  '🫶🏻',
  '🫶🏼',
  '🫶🏽',
  '🫶🏾',
  '🫶🏿',
  '🫷🏻',
  '🫷🏼',
  '🫷🏽',
  '🫷🏾',
  '🫷🏿',
  '🫸🏻',
  '🫸🏼',
  '🫸🏽',
  '🫸🏾',
  '🫸🏿',
  '👨‍❤️‍👨',
  '👨‍❤️‍💋‍👨',
  '👨‍👦',
  '👨‍👦‍👦',
  '👨‍👧',
  '👨‍👧‍👦',
  '👨‍👧‍👧',
  '👨‍👨‍👦',
  '👨‍👨‍👦‍👦',
  '👨‍👨‍👧',
  '👨‍👨‍👧‍👦',
  '👨‍👨‍👧‍👧',
  '👨‍👩‍👦',
  '👨‍👩‍👦‍👦',
  '👨‍👩‍👧',
  '👨‍👩‍👧‍👦',
  '👨‍👩‍👧‍👧',
  '👨🏻‍❤️‍👨🏻',
  '👨🏻‍❤️‍👨🏼',
  '👨🏻‍❤️‍👨🏽',
  '👨🏻‍❤️‍👨🏾',
  '👨🏻‍❤️‍👨🏿',
  '👨🏻‍❤️‍💋‍👨🏻',
  '👨🏻‍❤️‍💋‍👨🏼',
  '👨🏻‍❤️‍💋‍👨🏽',
  '👨🏻‍❤️‍💋‍👨🏾',
  '👨🏻‍❤️‍💋‍👨🏿',
  '👨🏻‍🤝‍👨🏼',
  '👨🏻‍🤝‍👨🏽',
  '👨🏻‍🤝‍👨🏾',
  '👨🏻‍🤝‍👨🏿',
  '👨🏼‍❤️‍👨🏻',
  '👨🏼‍❤️‍👨🏼',
  '👨🏼‍❤️‍👨🏽',
  '👨🏼‍❤️‍👨🏾',
  '👨🏼‍❤️‍👨🏿',
  '👨🏼‍❤️‍💋‍👨🏻',
  '👨🏼‍❤️‍💋‍👨🏼',
  '👨🏼‍❤️‍💋‍👨🏽',
  '👨🏼‍❤️‍💋‍👨🏾',
  '👨🏼‍❤️‍💋‍👨🏿',
  '👨🏼‍🤝‍👨🏻',
  '👨🏼‍🤝‍👨🏽',
  '👨🏼‍🤝‍👨🏾',
  '👨🏼‍🤝‍👨🏿',
  '👨🏽‍❤️‍👨🏻',
  '👨🏽‍❤️‍👨🏼',
  '👨🏽‍❤️‍👨🏽',
  '👨🏽‍❤️‍👨🏾',
  '👨🏽‍❤️‍👨🏿',
  '👨🏽‍❤️‍💋‍👨🏻',
  '👨🏽‍❤️‍💋‍👨🏼',
  '👨🏽‍❤️‍💋‍👨🏽',
  '👨🏽‍❤️‍💋‍👨🏾',
  '👨🏽‍❤️‍💋‍👨🏿',
  '👨🏽‍🤝‍👨🏻',
  '👨🏽‍🤝‍👨🏼',
  '👨🏽‍🤝‍👨🏾',
  '👨🏽‍🤝‍👨🏿',
  '👨🏾‍❤️‍👨🏻',
  '👨🏾‍❤️‍👨🏼',
  '👨🏾‍❤️‍👨🏽',
  '👨🏾‍❤️‍👨🏾',
  '👨🏾‍❤️‍👨🏿',
  '👨🏾‍❤️‍💋‍👨🏻',
  '👨🏾‍❤️‍💋‍👨🏼',
  '👨🏾‍❤️‍💋‍👨🏽',
  '👨🏾‍❤️‍💋‍👨🏾',
  '👨🏾‍❤️‍💋‍👨🏿',
  '👨🏾‍🤝‍👨🏻',
  '👨🏾‍🤝‍👨🏼',
  '👨🏾‍🤝‍👨🏽',
  '👨🏾‍🤝‍👨🏿',
  '👨🏿‍❤️‍👨🏻',
  '👨🏿‍❤️‍👨🏼',
  '👨🏿‍❤️‍👨🏽',
  '👨🏿‍❤️‍👨🏾',
  '👨🏿‍❤️‍👨🏿',
  '👨🏿‍❤️‍💋‍👨🏻',
  '👨🏿‍❤️‍💋‍👨🏼',
  '👨🏿‍❤️‍💋‍👨🏽',
  '👨🏿‍❤️‍💋‍👨🏾',
  '👨🏿‍❤️‍💋‍👨🏿',
  '👨🏿‍🤝‍👨🏻',
  '👨🏿‍🤝‍👨🏼',
  '👨🏿‍🤝‍👨🏽',
  '👨🏿‍🤝‍👨🏾',
  '👩‍❤️‍👨',
  '👩‍❤️‍👩',
  '👩‍❤️‍💋‍👨',
  '👩‍❤️‍💋‍👩',
  '👩‍👦',
  '👩‍👦‍👦',
  '👩‍👧',
  '👩‍👧‍👦',
  '👩‍👧‍👧',
  '👩‍👩‍👦',
  '👩‍👩‍👦‍👦',
  '👩‍👩‍👧',
  '👩‍👩‍👧‍👦',
  '👩‍👩‍👧‍👧',
  '👩🏻‍❤️‍👨🏻',
  '👩🏻‍❤️‍👨🏼',
  '👩🏻‍❤️‍👨🏽',
  '👩🏻‍❤️‍👨🏾',
  '👩🏻‍❤️‍👨🏿',
  '👩🏻‍❤️‍👩🏻',
  '👩🏻‍❤️‍👩🏼',
  '👩🏻‍❤️‍👩🏽',
  '👩🏻‍❤️‍👩🏾',
  '👩🏻‍❤️‍👩🏿',
  '👩🏻‍❤️‍💋‍👨🏻',
  '👩🏻‍❤️‍💋‍👨🏼',
  '👩🏻‍❤️‍💋‍👨🏽',
  '👩🏻‍❤️‍💋‍👨🏾',
  '👩🏻‍❤️‍💋‍👨🏿',
  '👩🏻‍❤️‍💋‍👩🏻',
  '👩🏻‍❤️‍💋‍👩🏼',
  '👩🏻‍❤️‍💋‍👩🏽',
  '👩🏻‍❤️‍💋‍👩🏾',
  '👩🏻‍❤️‍💋‍👩🏿',
  '👩🏻‍🤝‍👨🏼',
  '👩🏻‍🤝‍👨🏽',
  '👩🏻‍🤝‍👨🏾',
  '👩🏻‍🤝‍👨🏿',
  '👩🏻‍🤝‍👩🏼',
  '👩🏻‍🤝‍👩🏽',
  '👩🏻‍🤝‍👩🏾',
  '👩🏻‍🤝‍👩🏿',
  '👩🏼‍❤️‍👨🏻',
  '👩🏼‍❤️‍👨🏼',
  '👩🏼‍❤️‍👨🏽',
  '👩🏼‍❤️‍👨🏾',
  '👩🏼‍❤️‍👨🏿',
  '👩🏼‍❤️‍👩🏻',
  '👩🏼‍❤️‍👩🏼',
  '👩🏼‍❤️‍👩🏽',
  '👩🏼‍❤️‍👩🏾',
  '👩🏼‍❤️‍👩🏿',
  '👩🏼‍❤️‍💋‍👨🏻',
  '👩🏼‍❤️‍💋‍👨🏼',
  '👩🏼‍❤️‍💋‍👨🏽',
  '👩🏼‍❤️‍💋‍👨🏾',
  '👩🏼‍❤️‍💋‍👨🏿',
  '👩🏼‍❤️‍💋‍👩🏻',
  '👩🏼‍❤️‍💋‍👩🏼',
  '👩🏼‍❤️‍💋‍👩🏽',
  '👩🏼‍❤️‍💋‍👩🏾',
  '👩🏼‍❤️‍💋‍👩🏿',
  '👩🏼‍🤝‍👨🏻',
  '👩🏼‍🤝‍👨🏽',
  '👩🏼‍🤝‍👨🏾',
  '👩🏼‍🤝‍👨🏿',
  '👩🏼‍🤝‍👩🏻',
  '👩🏼‍🤝‍👩🏽',
  '👩🏼‍🤝‍👩🏾',
  '👩🏼‍🤝‍👩🏿',
  '👩🏽‍❤️‍👨🏻',
  '👩🏽‍❤️‍👨🏼',
  '👩🏽‍❤️‍👨🏽',
  '👩🏽‍❤️‍👨🏾',
  '👩🏽‍❤️‍👨🏿',
  '👩🏽‍❤️‍👩🏻',
  '👩🏽‍❤️‍👩🏼',
  '👩🏽‍❤️‍👩🏽',
  '👩🏽‍❤️‍👩🏾',
  '👩🏽‍❤️‍👩🏿',
  '👩🏽‍❤️‍💋‍👨🏻',
  '👩🏽‍❤️‍💋‍👨🏼',
  '👩🏽‍❤️‍💋‍👨🏽',
  '👩🏽‍❤️‍💋‍👨🏾',
  '👩🏽‍❤️‍💋‍👨🏿',
  '👩🏽‍❤️‍💋‍👩🏻',
  '👩🏽‍❤️‍💋‍👩🏼',
  '👩🏽‍❤️‍💋‍👩🏽',
  '👩🏽‍❤️‍💋‍👩🏾',
  '👩🏽‍❤️‍💋‍👩🏿',
  '👩🏽‍🤝‍👨🏻',
  '👩🏽‍🤝‍👨🏼',
  '👩🏽‍🤝‍👨🏾',
  '👩🏽‍🤝‍👨🏿',
  '👩🏽‍🤝‍👩🏻',
  '👩🏽‍🤝‍👩🏼',
  '👩🏽‍🤝‍👩🏾',
  '👩🏽‍🤝‍👩🏿',
  '👩🏾‍❤️‍👨🏻',
  '👩🏾‍❤️‍👨🏼',
  '👩🏾‍❤️‍👨🏽',
  '👩🏾‍❤️‍👨🏾',
  '👩🏾‍❤️‍👨🏿',
  '👩🏾‍❤️‍👩🏻',
  '👩🏾‍❤️‍👩🏼',
  '👩🏾‍❤️‍👩🏽',
  '👩🏾‍❤️‍👩🏾',
  '👩🏾‍❤️‍👩🏿',
  '👩🏾‍❤️‍💋‍👨🏻',
  '👩🏾‍❤️‍💋‍👨🏼',
  '👩🏾‍❤️‍💋‍👨🏽',
  '👩🏾‍❤️‍💋‍👨🏾',
  '👩🏾‍❤️‍💋‍👨🏿',
  '👩🏾‍❤️‍💋‍👩🏻',
  '👩🏾‍❤️‍💋‍👩🏼',
  '👩🏾‍❤️‍💋‍👩🏽',
  '👩🏾‍❤️‍💋‍👩🏾',
  '👩🏾‍❤️‍💋‍👩🏿',
  '👩🏾‍🤝‍👨🏻',
  '👩🏾‍🤝‍👨🏼',
  '👩🏾‍🤝‍👨🏽',
  '👩🏾‍🤝‍👨🏿',
  '👩🏾‍🤝‍👩🏻',
  '👩🏾‍🤝‍👩🏼',
  '👩🏾‍🤝‍👩🏽',
  '👩🏾‍🤝‍👩🏿',
  '👩🏿‍❤️‍👨🏻',
  '👩🏿‍❤️‍👨🏼',
  '👩🏿‍❤️‍👨🏽',
  '👩🏿‍❤️‍👨🏾',
  '👩🏿‍❤️‍👨🏿',
  '👩🏿‍❤️‍👩🏻',
  '👩🏿‍❤️‍👩🏼',
  '👩🏿‍❤️‍👩🏽',
  '👩🏿‍❤️‍👩🏾',
  '👩🏿‍❤️‍👩🏿',
  '👩🏿‍❤️‍💋‍👨🏻',
  '👩🏿‍❤️‍💋‍👨🏼',
  '👩🏿‍❤️‍💋‍👨🏽',
  '👩🏿‍❤️‍💋‍👨🏾',
  '👩🏿‍❤️‍💋‍👨🏿',
  '👩🏿‍❤️‍💋‍👩🏻',
  '👩🏿‍❤️‍💋‍👩🏼',
  '👩🏿‍❤️‍💋‍👩🏽',
  '👩🏿‍❤️‍💋‍👩🏾',
  '👩🏿‍❤️‍💋‍👩🏿',
  '👩🏿‍🤝‍👨🏻',
  '👩🏿‍🤝‍👨🏼',
  '👩🏿‍🤝‍👨🏽',
  '👩🏿‍🤝‍👨🏾',
  '👩🏿‍🤝‍👩🏻',
  '👩🏿‍🤝‍👩🏼',
  '👩🏿‍🤝‍👩🏽',
  '👩🏿‍🤝‍👩🏾',
  '🧑‍🤝‍🧑',
  '🧑🏻‍❤️‍💋‍🧑🏼',
  '🧑🏻‍❤️‍💋‍🧑🏽',
  '🧑🏻‍❤️‍💋‍🧑🏾',
  '🧑🏻‍❤️‍💋‍🧑🏿',
  '🧑🏻‍❤️‍🧑🏼',
  '🧑🏻‍❤️‍🧑🏽',
  '🧑🏻‍❤️‍🧑🏾',
  '🧑🏻‍❤️‍🧑🏿',
  '🧑🏻‍🎄',
  '🧑🏻‍🤝‍🧑🏻',
  '🧑🏻‍🤝‍🧑🏼',
  '🧑🏻‍🤝‍🧑🏽',
  '🧑🏻‍🤝‍🧑🏾',
  '🧑🏻‍🤝‍🧑🏿',
  '🧑🏼‍❤️‍💋‍🧑🏻',
  '🧑🏼‍❤️‍💋‍🧑🏽',
  '🧑🏼‍❤️‍💋‍🧑🏾',
  '🧑🏼‍❤️‍💋‍🧑🏿',
  '🧑🏼‍❤️‍🧑🏻',
  '🧑🏼‍❤️‍🧑🏽',
  '🧑🏼‍❤️‍🧑🏾',
  '🧑🏼‍❤️‍🧑🏿',
  '🧑🏼‍🎄',
  '🧑🏼‍🤝‍🧑🏻',
  '🧑🏼‍🤝‍🧑🏼',
  '🧑🏼‍🤝‍🧑🏽',
  '🧑🏼‍🤝‍🧑🏾',
  '🧑🏼‍🤝‍🧑🏿',
  '🧑🏽‍❤️‍💋‍🧑🏻',
  '🧑🏽‍❤️‍💋‍🧑🏼',
  '🧑🏽‍❤️‍💋‍🧑🏾',
  '🧑🏽‍❤️‍💋‍🧑🏿',
  '🧑🏽‍❤️‍🧑🏻',
  '🧑🏽‍❤️‍🧑🏼',
  '🧑🏽‍❤️‍🧑🏾',
  '🧑🏽‍❤️‍🧑🏿',
  '🧑🏽‍🎄',
  '🧑🏽‍🤝‍🧑🏻',
  '🧑🏽‍🤝‍🧑🏼',
  '🧑🏽‍🤝‍🧑🏽',
  '🧑🏽‍🤝‍🧑🏾',
  '🧑🏽‍🤝‍🧑🏿',
  '🧑🏾‍❤️‍💋‍🧑🏻',
  '🧑🏾‍❤️‍💋‍🧑🏼',
  '🧑🏾‍❤️‍💋‍🧑🏽',
  '🧑🏾‍❤️‍💋‍🧑🏿',
  '🧑🏾‍❤️‍🧑🏻',
  '🧑🏾‍❤️‍🧑🏼',
  '🧑🏾‍❤️‍🧑🏽',
  '🧑🏾‍❤️‍🧑🏿',
  '🧑🏾‍🎄',
  '🧑🏾‍🤝‍🧑🏻',
  '🧑🏾‍🤝‍🧑🏼',
  '🧑🏾‍🤝‍🧑🏽',
  '🧑🏾‍🤝‍🧑🏾',
  '🧑🏾‍🤝‍🧑🏿',
  '🧑🏿‍❤️‍💋‍🧑🏻',
  '🧑🏿‍❤️‍💋‍🧑🏼',
  '🧑🏿‍❤️‍💋‍🧑🏽',
  '🧑🏿‍❤️‍💋‍🧑🏾',
  '🧑🏿‍❤️‍🧑🏻',
  '🧑🏿‍❤️‍🧑🏼',
  '🧑🏿‍❤️‍🧑🏽',
  '🧑🏿‍❤️‍🧑🏾',
  '🧑🏿‍🎄',
  '🧑🏿‍🤝‍🧑🏻',
  '🧑🏿‍🤝‍🧑🏼',
  '🧑🏿‍🤝‍🧑🏽',
  '🧑🏿‍🤝‍🧑🏾',
  '🧑🏿‍🤝‍🧑🏿',
  '🫱🏻‍🫲🏼',
  '🫱🏻‍🫲🏽',
  '🫱🏻‍🫲🏾',
  '🫱🏻‍🫲🏿',
  '🫱🏼‍🫲🏻',
  '🫱🏼‍🫲🏽',
  '🫱🏼‍🫲🏾',
  '🫱🏼‍🫲🏿',
  '🫱🏽‍🫲🏻',
  '🫱🏽‍🫲🏼',
  '🫱🏽‍🫲🏾',
  '🫱🏽‍🫲🏿',
  '🫱🏾‍🫲🏻',
  '🫱🏾‍🫲🏼',
  '🫱🏾‍🫲🏽',
  '🫱🏾‍🫲🏿',
  '🫱🏿‍🫲🏻',
  '🫱🏿‍🫲🏼',
  '🫱🏿‍🫲🏽',
  '🫱🏿‍🫲🏾',
  '👨‍⚕️',
  '👨‍⚖️',
  '👨‍✈️',
  '👨‍🌾',
  '👨‍🍳',
  '👨‍🍼',
  '👨‍🎓',
  '👨‍🎤',
  '👨‍🎨',
  '👨‍🏫',
  '👨‍🏭',
  '👨‍💻',
  '👨‍💼',
  '👨‍🔧',
  '👨‍🔬',
  '👨‍🚀',
  '👨‍🚒',
  '👨‍🦯',
  '👨‍🦼',
  '👨‍🦽',
  '👨🏻‍⚕️',
  '👨🏻‍⚖️',
  '👨🏻‍✈️',
  '👨🏻‍🌾',
  '👨🏻‍🍳',
  '👨🏻‍🍼',
  '👨🏻‍🎓',
  '👨🏻‍🎤',
  '👨🏻‍🎨',
  '👨🏻‍🏫',
  '👨🏻‍🏭',
  '👨🏻‍💻',
  '👨🏻‍💼',
  '👨🏻‍🔧',
  '👨🏻‍🔬',
  '👨🏻‍🚀',
  '👨🏻‍🚒',
  '👨🏻‍🦯',
  '👨🏻‍🦼',
  '👨🏻‍🦽',
  '👨🏼‍⚕️',
  '👨🏼‍⚖️',
  '👨🏼‍✈️',
  '👨🏼‍🌾',
  '👨🏼‍🍳',
  '👨🏼‍🍼',
  '👨🏼‍🎓',
  '👨🏼‍🎤',
  '👨🏼‍🎨',
  '👨🏼‍🏫',
  '👨🏼‍🏭',
  '👨🏼‍💻',
  '👨🏼‍💼',
  '👨🏼‍🔧',
  '👨🏼‍🔬',
  '👨🏼‍🚀',
  '👨🏼‍🚒',
  '👨🏼‍🦯',
  '👨🏼‍🦼',
  '👨🏼‍🦽',
  '👨🏽‍⚕️',
  '👨🏽‍⚖️',
  '👨🏽‍✈️',
  '👨🏽‍🌾',
  '👨🏽‍🍳',
  '👨🏽‍🍼',
  '👨🏽‍🎓',
  '👨🏽‍🎤',
  '👨🏽‍🎨',
  '👨🏽‍🏫',
  '👨🏽‍🏭',
  '👨🏽‍💻',
  '👨🏽‍💼',
  '👨🏽‍🔧',
  '👨🏽‍🔬',
  '👨🏽‍🚀',
  '👨🏽‍🚒',
  '👨🏽‍🦯',
  '👨🏽‍🦼',
  '👨🏽‍🦽',
  '👨🏾‍⚕️',
  '👨🏾‍⚖️',
  '👨🏾‍✈️',
  '👨🏾‍🌾',
  '👨🏾‍🍳',
  '👨🏾‍🍼',
  '👨🏾‍🎓',
  '👨🏾‍🎤',
  '👨🏾‍🎨',
  '👨🏾‍🏫',
  '👨🏾‍🏭',
  '👨🏾‍💻',
  '👨🏾‍💼',
  '👨🏾‍🔧',
  '👨🏾‍🔬',
  '👨🏾‍🚀',
  '👨🏾‍🚒',
  '👨🏾‍🦯',
  '👨🏾‍🦼',
  '👨🏾‍🦽',
  '👨🏿‍⚕️',
  '👨🏿‍⚖️',
  '👨🏿‍✈️',
  '👨🏿‍🌾',
  '👨🏿‍🍳',
  '👨🏿‍🍼',
  '👨🏿‍🎓',
  '👨🏿‍🎤',
  '👨🏿‍🎨',
  '👨🏿‍🏫',
  '👨🏿‍🏭',
  '👨🏿‍💻',
  '👨🏿‍💼',
  '👨🏿‍🔧',
  '👨🏿‍🔬',
  '👨🏿‍🚀',
  '👨🏿‍🚒',
  '👨🏿‍🦯',
  '👨🏿‍🦼',
  '👨🏿‍🦽',
  '👩‍⚕️',
  '👩‍⚖️',
  '👩‍✈️',
  '👩‍🌾',
  '👩‍🍳',
  '👩‍🍼',
  '👩‍🎓',
  '👩‍🎤',
  '👩‍🎨',
  '👩‍🏫',
  '👩‍🏭',
  '👩‍💻',
  '👩‍💼',
  '👩‍🔧',
  '👩‍🔬',
  '👩‍🚀',
  '👩‍🚒',
  '👩‍🦯',
  '👩‍🦼',
  '👩‍🦽',
  '👩🏻‍⚕️',
  '👩🏻‍⚖️',
  '👩🏻‍✈️',
  '👩🏻‍🌾',
  '👩🏻‍🍳',
  '👩🏻‍🍼',
  '👩🏻‍🎓',
  '👩🏻‍🎤',
  '👩🏻‍🎨',
  '👩🏻‍🏫',
  '👩🏻‍🏭',
  '👩🏻‍💻',
  '👩🏻‍💼',
  '👩🏻‍🔧',
  '👩🏻‍🔬',
  '👩🏻‍🚀',
  '👩🏻‍🚒',
  '👩🏻‍🦯',
  '👩🏻‍🦼',
  '👩🏻‍🦽',
  '👩🏼‍⚕️',
  '👩🏼‍⚖️',
  '👩🏼‍✈️',
  '👩🏼‍🌾',
  '👩🏼‍🍳',
  '👩🏼‍🍼',
  '👩🏼‍🎓',
  '👩🏼‍🎤',
  '👩🏼‍🎨',
  '👩🏼‍🏫',
  '👩🏼‍🏭',
  '👩🏼‍💻',
  '👩🏼‍💼',
  '👩🏼‍🔧',
  '👩🏼‍🔬',
  '👩🏼‍🚀',
  '👩🏼‍🚒',
  '👩🏼‍🦯',
  '👩🏼‍🦼',
  '👩🏼‍🦽',
  '👩🏽‍⚕️',
  '👩🏽‍⚖️',
  '👩🏽‍✈️',
  '👩🏽‍🌾',
  '👩🏽‍🍳',
  '👩🏽‍🍼',
  '👩🏽‍🎓',
  '👩🏽‍🎤',
  '👩🏽‍🎨',
  '👩🏽‍🏫',
  '👩🏽‍🏭',
  '👩🏽‍💻',
  '👩🏽‍💼',
  '👩🏽‍🔧',
  '👩🏽‍🔬',
  '👩🏽‍🚀',
  '👩🏽‍🚒',
  '👩🏽‍🦯',
  '👩🏽‍🦼',
  '👩🏽‍🦽',
  '👩🏾‍⚕️',
  '👩🏾‍⚖️',
  '👩🏾‍✈️',
  '👩🏾‍🌾',
  '👩🏾‍🍳',
  '👩🏾‍🍼',
  '👩🏾‍🎓',
  '👩🏾‍🎤',
  '👩🏾‍🎨',
  '👩🏾‍🏫',
  '👩🏾‍🏭',
  '👩🏾‍💻',
  '👩🏾‍💼',
  '👩🏾‍🔧',
  '👩🏾‍🔬',
  '👩🏾‍🚀',
  '👩🏾‍🚒',
  '👩🏾‍🦯',
  '👩🏾‍🦼',
  '👩🏾‍🦽',
  '👩🏿‍⚕️',
  '👩🏿‍⚖️',
  '👩🏿‍✈️',
  '👩🏿‍🌾',
  '👩🏿‍🍳',
  '👩🏿‍🍼',
  '👩🏿‍🎓',
  '👩🏿‍🎤',
  '👩🏿‍🎨',
  '👩🏿‍🏫',
  '👩🏿‍🏭',
  '👩🏿‍💻',
  '👩🏿‍💼',
  '👩🏿‍🔧',
  '👩🏿‍🔬',
  '👩🏿‍🚀',
  '👩🏿‍🚒',
  '👩🏿‍🦯',
  '👩🏿‍🦼',
  '👩🏿‍🦽',
  '🧑‍⚕️',
  '🧑‍⚖️',
  '🧑‍✈️',
  '🧑‍🌾',
  '🧑‍🍳',
  '🧑‍🍼',
  '🧑‍🎓',
  '🧑‍🎤',
  '🧑‍🎨',
  '🧑‍🏫',
  '🧑‍🏭',
  '🧑‍💻',
  '🧑‍💼',
  '🧑‍🔧',
  '🧑‍🔬',
  '🧑‍🚀',
  '🧑‍🚒',
  '🧑‍🦯',
  '🧑‍🦼',
  '🧑‍🦽',
  '🧑🏻‍⚕️',
  '🧑🏻‍⚖️',
  '🧑🏻‍✈️',
  '🧑🏻‍🌾',
  '🧑🏻‍🍳',
  '🧑🏻‍🍼',
  '🧑🏻‍🎓',
  '🧑🏻‍🎤',
  '🧑🏻‍🎨',
  '🧑🏻‍🏫',
  '🧑🏻‍🏭',
  '🧑🏻‍💻',
  '🧑🏻‍💼',
  '🧑🏻‍🔧',
  '🧑🏻‍🔬',
  '🧑🏻‍🚀',
  '🧑🏻‍🚒',
  '🧑🏻‍🦯',
  '🧑🏻‍🦼',
  '🧑🏻‍🦽',
  '🧑🏼‍⚕️',
  '🧑🏼‍⚖️',
  '🧑🏼‍✈️',
  '🧑🏼‍🌾',
  '🧑🏼‍🍳',
  '🧑🏼‍🍼',
  '🧑🏼‍🎓',
  '🧑🏼‍🎤',
  '🧑🏼‍🎨',
  '🧑🏼‍🏫',
  '🧑🏼‍🏭',
  '🧑🏼‍💻',
  '🧑🏼‍💼',
  '🧑🏼‍🔧',
  '🧑🏼‍🔬',
  '🧑🏼‍🚀',
  '🧑🏼‍🚒',
  '🧑🏼‍🦯',
  '🧑🏼‍🦼',
  '🧑🏼‍🦽',
  '🧑🏽‍⚕️',
  '🧑🏽‍⚖️',
  '🧑🏽‍✈️',
  '🧑🏽‍🌾',
  '🧑🏽‍🍳',
  '🧑🏽‍🍼',
  '🧑🏽‍🎓',
  '🧑🏽‍🎤',
  '🧑🏽‍🎨',
  '🧑🏽‍🏫',
  '🧑🏽‍🏭',
  '🧑🏽‍💻',
  '🧑🏽‍💼',
  '🧑🏽‍🔧',
  '🧑🏽‍🔬',
  '🧑🏽‍🚀',
  '🧑🏽‍🚒',
  '🧑🏽‍🦯',
  '🧑🏽‍🦼',
  '🧑🏽‍🦽',
  '🧑🏾‍⚕️',
  '🧑🏾‍⚖️',
  '🧑🏾‍✈️',
  '🧑🏾‍🌾',
  '🧑🏾‍🍳',
  '🧑🏾‍🍼',
  '🧑🏾‍🎓',
  '🧑🏾‍🎤',
  '🧑🏾‍🎨',
  '🧑🏾‍🏫',
  '🧑🏾‍🏭',
  '🧑🏾‍💻',
  '🧑🏾‍💼',
  '🧑🏾‍🔧',
  '🧑🏾‍🔬',
  '🧑🏾‍🚀',
  '🧑🏾‍🚒',
  '🧑🏾‍🦯',
  '🧑🏾‍🦼',
  '🧑🏾‍🦽',
  '🧑🏿‍⚕️',
  '🧑🏿‍⚖️',
  '🧑🏿‍✈️',
  '🧑🏿‍🌾',
  '🧑🏿‍🍳',
  '🧑🏿‍🍼',
  '🧑🏿‍🎓',
  '🧑🏿‍🎤',
  '🧑🏿‍🎨',
  '🧑🏿‍🏫',
  '🧑🏿‍🏭',
  '🧑🏿‍💻',
  '🧑🏿‍💼',
  '🧑🏿‍🔧',
  '🧑🏿‍🔬',
  '🧑🏿‍🚀',
  '🧑🏿‍🚒',
  '🧑🏿‍🦯',
  '🧑🏿‍🦼',
  '🧑🏿‍🦽',
  '⛹🏻‍♀️',
  '⛹🏻‍♂️',
  '⛹🏼‍♀️',
  '⛹🏼‍♂️',
  '⛹🏽‍♀️',
  '⛹🏽‍♂️',
  '⛹🏾‍♀️',
  '⛹🏾‍♂️',
  '⛹🏿‍♀️',
  '⛹🏿‍♂️',
  '⛹️‍♀️',
  '⛹️‍♂️',
  '🏃‍♀️',
  '🏃‍♂️',
  '🏃🏻‍♀️',
  '🏃🏻‍♂️',
  '🏃🏼‍♀️',
  '🏃🏼‍♂️',
  '🏃🏽‍♀️',
  '🏃🏽‍♂️',
  '🏃🏾‍♀️',
  '🏃🏾‍♂️',
  '🏃🏿‍♀️',
  '🏃🏿‍♂️',
  '🏄‍♀️',
  '🏄‍♂️',
  '🏄🏻‍♀️',
  '🏄🏻‍♂️',
  '🏄🏼‍♀️',
  '🏄🏼‍♂️',
  '🏄🏽‍♀️',
  '🏄🏽‍♂️',
  '🏄🏾‍♀️',
  '🏄🏾‍♂️',
  '🏄🏿‍♀️',
  '🏄🏿‍♂️',
  '🏊‍♀️',
  '🏊‍♂️',
  '🏊🏻‍♀️',
  '🏊🏻‍♂️',
  '🏊🏼‍♀️',
  '🏊🏼‍♂️',
  '🏊🏽‍♀️',
  '🏊🏽‍♂️',
  '🏊🏾‍♀️',
  '🏊🏾‍♂️',
  '🏊🏿‍♀️',
  '🏊🏿‍♂️',
  '🏋🏻‍♀️',
  '🏋🏻‍♂️',
  '🏋🏼‍♀️',
  '🏋🏼‍♂️',
  '🏋🏽‍♀️',
  '🏋🏽‍♂️',
  '🏋🏾‍♀️',
  '🏋🏾‍♂️',
  '🏋🏿‍♀️',
  '🏋🏿‍♂️',
  '🏋️‍♀️',
  '🏋️‍♂️',
  '🏌🏻‍♀️',
  '🏌🏻‍♂️',
  '🏌🏼‍♀️',
  '🏌🏼‍♂️',
  '🏌🏽‍♀️',
  '🏌🏽‍♂️',
  '🏌🏾‍♀️',
  '🏌🏾‍♂️',
  '🏌🏿‍♀️',
  '🏌🏿‍♂️',
  '🏌️‍♀️',
  '🏌️‍♂️',
  '👮‍♀️',
  '👮‍♂️',
  '👮🏻‍♀️',
  '👮🏻‍♂️',
  '👮🏼‍♀️',
  '👮🏼‍♂️',
  '👮🏽‍♀️',
  '👮🏽‍♂️',
  '👮🏾‍♀️',
  '👮🏾‍♂️',
  '👮🏿‍♀️',
  '👮🏿‍♂️',
  '👯‍♀️',
  '👯‍♂️',
  '👰‍♀️',
  '👰‍♂️',
  '👰🏻‍♀️',
  '👰🏻‍♂️',
  '👰🏼‍♀️',
  '👰🏼‍♂️',
  '👰🏽‍♀️',
  '👰🏽‍♂️',
  '👰🏾‍♀️',
  '👰🏾‍♂️',
  '👰🏿‍♀️',
  '👰🏿‍♂️',
  '👱‍♀️',
  '👱‍♂️',
  '👱🏻‍♀️',
  '👱🏻‍♂️',
  '👱🏼‍♀️',
  '👱🏼‍♂️',
  '👱🏽‍♀️',
  '👱🏽‍♂️',
  '👱🏾‍♀️',
  '👱🏾‍♂️',
  '👱🏿‍♀️',
  '👱🏿‍♂️',
  '👳‍♀️',
  '👳‍♂️',
  '👳🏻‍♀️',
  '👳🏻‍♂️',
  '👳🏼‍♀️',
  '👳🏼‍♂️',
  '👳🏽‍♀️',
  '👳🏽‍♂️',
  '👳🏾‍♀️',
  '👳🏾‍♂️',
  '👳🏿‍♀️',
  '👳🏿‍♂️',
  '👷‍♀️',
  '👷‍♂️',
  '👷🏻‍♀️',
  '👷🏻‍♂️',
  '👷🏼‍♀️',
  '👷🏼‍♂️',
  '👷🏽‍♀️',
  '👷🏽‍♂️',
  '👷🏾‍♀️',
  '👷🏾‍♂️',
  '👷🏿‍♀️',
  '👷🏿‍♂️',
  '💁‍♀️',
  '💁‍♂️',
  '💁🏻‍♀️',
  '💁🏻‍♂️',
  '💁🏼‍♀️',
  '💁🏼‍♂️',
  '💁🏽‍♀️',
  '💁🏽‍♂️',
  '💁🏾‍♀️',
  '💁🏾‍♂️',
  '💁🏿‍♀️',
  '💁🏿‍♂️',
  '💂‍♀️',
  '💂‍♂️',
  '💂🏻‍♀️',
  '💂🏻‍♂️',
  '💂🏼‍♀️',
  '💂🏼‍♂️',
  '💂🏽‍♀️',
  '💂🏽‍♂️',
  '💂🏾‍♀️',
  '💂🏾‍♂️',
  '💂🏿‍♀️',
  '💂🏿‍♂️',
  '💆‍♀️',
  '💆‍♂️',
  '💆🏻‍♀️',
  '💆🏻‍♂️',
  '💆🏼‍♀️',
  '💆🏼‍♂️',
  '💆🏽‍♀️',
  '💆🏽‍♂️',
  '💆🏾‍♀️',
  '💆🏾‍♂️',
  '💆🏿‍♀️',
  '💆🏿‍♂️',
  '💇‍♀️',
  '💇‍♂️',
  '💇🏻‍♀️',
  '💇🏻‍♂️',
  '💇🏼‍♀️',
  '💇🏼‍♂️',
  '💇🏽‍♀️',
  '💇🏽‍♂️',
  '💇🏾‍♀️',
  '💇🏾‍♂️',
  '💇🏿‍♀️',
  '💇🏿‍♂️',
  '🕵🏻‍♀️',
  '🕵🏻‍♂️',
  '🕵🏼‍♀️',
  '🕵🏼‍♂️',
  '🕵🏽‍♀️',
  '🕵🏽‍♂️',
  '🕵🏾‍♀️',
  '🕵🏾‍♂️',
  '🕵🏿‍♀️',
  '🕵🏿‍♂️',
  '🕵️‍♀️',
  '🕵️‍♂️',
  '🙅‍♀️',
  '🙅‍♂️',
  '🙅🏻‍♀️',
  '🙅🏻‍♂️',
  '🙅🏼‍♀️',
  '🙅🏼‍♂️',
  '🙅🏽‍♀️',
  '🙅🏽‍♂️',
  '🙅🏾‍♀️',
  '🙅🏾‍♂️',
  '🙅🏿‍♀️',
  '🙅🏿‍♂️',
  '🙆‍♀️',
  '🙆‍♂️',
  '🙆🏻‍♀️',
  '🙆🏻‍♂️',
  '🙆🏼‍♀️',
  '🙆🏼‍♂️',
  '🙆🏽‍♀️',
  '🙆🏽‍♂️',
  '🙆🏾‍♀️',
  '🙆🏾‍♂️',
  '🙆🏿‍♀️',
  '🙆🏿‍♂️',
  '🙇‍♀️',
  '🙇‍♂️',
  '🙇🏻‍♀️',
  '🙇🏻‍♂️',
  '🙇🏼‍♀️',
  '🙇🏼‍♂️',
  '🙇🏽‍♀️',
  '🙇🏽‍♂️',
  '🙇🏾‍♀️',
  '🙇🏾‍♂️',
  '🙇🏿‍♀️',
  '🙇🏿‍♂️',
  '🙋‍♀️',
  '🙋‍♂️',
  '🙋🏻‍♀️',
  '🙋🏻‍♂️',
  '🙋🏼‍♀️',
  '🙋🏼‍♂️',
  '🙋🏽‍♀️',
  '🙋🏽‍♂️',
  '🙋🏾‍♀️',
  '🙋🏾‍♂️',
  '🙋🏿‍♀️',
  '🙋🏿‍♂️',
  '🙍‍♀️',
  '🙍‍♂️',
  '🙍🏻‍♀️',
  '🙍🏻‍♂️',
  '🙍🏼‍♀️',
  '🙍🏼‍♂️',
  '🙍🏽‍♀️',
  '🙍🏽‍♂️',
  '🙍🏾‍♀️',
  '🙍🏾‍♂️',
  '🙍🏿‍♀️',
  '🙍🏿‍♂️',
  '🙎‍♀️',
  '🙎‍♂️',
  '🙎🏻‍♀️',
  '🙎🏻‍♂️',
  '🙎🏼‍♀️',
  '🙎🏼‍♂️',
  '🙎🏽‍♀️',
  '🙎🏽‍♂️',
  '🙎🏾‍♀️',
  '🙎🏾‍♂️',
  '🙎🏿‍♀️',
  '🙎🏿‍♂️',
  '🚣‍♀️',
  '🚣‍♂️',
  '🚣🏻‍♀️',
  '🚣🏻‍♂️',
  '🚣🏼‍♀️',
  '🚣🏼‍♂️',
  '🚣🏽‍♀️',
  '🚣🏽‍♂️',
  '🚣🏾‍♀️',
  '🚣🏾‍♂️',
  '🚣🏿‍♀️',
  '🚣🏿‍♂️',
  '🚴‍♀️',
  '🚴‍♂️',
  '🚴🏻‍♀️',
  '🚴🏻‍♂️',
  '🚴🏼‍♀️',
  '🚴🏼‍♂️',
  '🚴🏽‍♀️',
  '🚴🏽‍♂️',
  '🚴🏾‍♀️',
  '🚴🏾‍♂️',
  '🚴🏿‍♀️',
  '🚴🏿‍♂️',
  '🚵‍♀️',
  '🚵‍♂️',
  '🚵🏻‍♀️',
  '🚵🏻‍♂️',
  '🚵🏼‍♀️',
  '🚵🏼‍♂️',
  '🚵🏽‍♀️',
  '🚵🏽‍♂️',
  '🚵🏾‍♀️',
  '🚵🏾‍♂️',
  '🚵🏿‍♀️',
  '🚵🏿‍♂️',
  '🚶‍♀️',
  '🚶‍♂️',
  '🚶🏻‍♀️',
  '🚶🏻‍♂️',
  '🚶🏼‍♀️',
  '🚶🏼‍♂️',
  '🚶🏽‍♀️',
  '🚶🏽‍♂️',
  '🚶🏾‍♀️',
  '🚶🏾‍♂️',
  '🚶🏿‍♀️',
  '🚶🏿‍♂️',
  '🤦‍♀️',
  '🤦‍♂️',
  '🤦🏻‍♀️',
  '🤦🏻‍♂️',
  '🤦🏼‍♀️',
  '🤦🏼‍♂️',
  '🤦🏽‍♀️',
  '🤦🏽‍♂️',
  '🤦🏾‍♀️',
  '🤦🏾‍♂️',
  '🤦🏿‍♀️',
  '🤦🏿‍♂️',
  '🤵‍♀️',
  '🤵‍♂️',
  '🤵🏻‍♀️',
  '🤵🏻‍♂️',
  '🤵🏼‍♀️',
  '🤵🏼‍♂️',
  '🤵🏽‍♀️',
  '🤵🏽‍♂️',
  '🤵🏾‍♀️',
  '🤵🏾‍♂️',
  '🤵🏿‍♀️',
  '🤵🏿‍♂️',
  '🤷‍♀️',
  '🤷‍♂️',
  '🤷🏻‍♀️',
  '🤷🏻‍♂️',
  '🤷🏼‍♀️',
  '🤷🏼‍♂️',
  '🤷🏽‍♀️',
  '🤷🏽‍♂️',
  '🤷🏾‍♀️',
  '🤷🏾‍♂️',
  '🤷🏿‍♀️',
  '🤷🏿‍♂️',
  '🤸‍♀️',
  '🤸‍♂️',
  '🤸🏻‍♀️',
  '🤸🏻‍♂️',
  '🤸🏼‍♀️',
  '🤸🏼‍♂️',
  '🤸🏽‍♀️',
  '🤸🏽‍♂️',
  '🤸🏾‍♀️',
  '🤸🏾‍♂️',
  '🤸🏿‍♀️',
  '🤸🏿‍♂️',
  '🤹‍♀️',
  '🤹‍♂️',
  '🤹🏻‍♀️',
  '🤹🏻‍♂️',
  '🤹🏼‍♀️',
  '🤹🏼‍♂️',
  '🤹🏽‍♀️',
  '🤹🏽‍♂️',
  '🤹🏾‍♀️',
  '🤹🏾‍♂️',
  '🤹🏿‍♀️',
  '🤹🏿‍♂️',
  '🤼‍♀️',
  '🤼‍♂️',
  '🤽‍♀️',
  '🤽‍♂️',
  '🤽🏻‍♀️',
  '🤽🏻‍♂️',
  '🤽🏼‍♀️',
  '🤽🏼‍♂️',
  '🤽🏽‍♀️',
  '🤽🏽‍♂️',
  '🤽🏾‍♀️',
  '🤽🏾‍♂️',
  '🤽🏿‍♀️',
  '🤽🏿‍♂️',
  '🤾‍♀️',
  '🤾‍♂️',
  '🤾🏻‍♀️',
  '🤾🏻‍♂️',
  '🤾🏼‍♀️',
  '🤾🏼‍♂️',
  '🤾🏽‍♀️',
  '🤾🏽‍♂️',
  '🤾🏾‍♀️',
  '🤾🏾‍♂️',
  '🤾🏿‍♀️',
  '🤾🏿‍♂️',
  '🦸‍♀️',
  '🦸‍♂️',
  '🦸🏻‍♀️',
  '🦸🏻‍♂️',
  '🦸🏼‍♀️',
  '🦸🏼‍♂️',
  '🦸🏽‍♀️',
  '🦸🏽‍♂️',
  '🦸🏾‍♀️',
  '🦸🏾‍♂️',
  '🦸🏿‍♀️',
  '🦸🏿‍♂️',
  '🦹‍♀️',
  '🦹‍♂️',
  '🦹🏻‍♀️',
  '🦹🏻‍♂️',
  '🦹🏼‍♀️',
  '🦹🏼‍♂️',
  '🦹🏽‍♀️',
  '🦹🏽‍♂️',
  '🦹🏾‍♀️',
  '🦹🏾‍♂️',
  '🦹🏿‍♀️',
  '🦹🏿‍♂️',
  '🧍‍♀️',
  '🧍‍♂️',
  '🧍🏻‍♀️',
  '🧍🏻‍♂️',
  '🧍🏼‍♀️',
  '🧍🏼‍♂️',
  '🧍🏽‍♀️',
  '🧍🏽‍♂️',
  '🧍🏾‍♀️',
  '🧍🏾‍♂️',
  '🧍🏿‍♀️',
  '🧍🏿‍♂️',
  '🧎‍♀️',
  '🧎‍♂️',
  '🧎🏻‍♀️',
  '🧎🏻‍♂️',
  '🧎🏼‍♀️',
  '🧎🏼‍♂️',
  '🧎🏽‍♀️',
  '🧎🏽‍♂️',
  '🧎🏾‍♀️',
  '🧎🏾‍♂️',
  '🧎🏿‍♀️',
  '🧎🏿‍♂️',
  '🧏‍♀️',
  '🧏‍♂️',
  '🧏🏻‍♀️',
  '🧏🏻‍♂️',
  '🧏🏼‍♀️',
  '🧏🏼‍♂️',
  '🧏🏽‍♀️',
  '🧏🏽‍♂️',
  '🧏🏾‍♀️',
  '🧏🏾‍♂️',
  '🧏🏿‍♀️',
  '🧏🏿‍♂️',
  '🧔‍♀️',
  '🧔‍♂️',
  '🧔🏻‍♀️',
  '🧔🏻‍♂️',
  '🧔🏼‍♀️',
  '🧔🏼‍♂️',
  '🧔🏽‍♀️',
  '🧔🏽‍♂️',
  '🧔🏾‍♀️',
  '🧔🏾‍♂️',
  '🧔🏿‍♀️',
  '🧔🏿‍♂️',
  '🧖‍♀️',
  '🧖‍♂️',
  '🧖🏻‍♀️',
  '🧖🏻‍♂️',
  '🧖🏼‍♀️',
  '🧖🏼‍♂️',
  '🧖🏽‍♀️',
  '🧖🏽‍♂️',
  '🧖🏾‍♀️',
  '🧖🏾‍♂️',
  '🧖🏿‍♀️',
  '🧖🏿‍♂️',
  '🧗‍♀️',
  '🧗‍♂️',
  '🧗🏻‍♀️',
  '🧗🏻‍♂️',
  '🧗🏼‍♀️',
  '🧗🏼‍♂️',
  '🧗🏽‍♀️',
  '🧗🏽‍♂️',
  '🧗🏾‍♀️',
  '🧗🏾‍♂️',
  '🧗🏿‍♀️',
  '🧗🏿‍♂️',
  '🧘‍♀️',
  '🧘‍♂️',
  '🧘🏻‍♀️',
  '🧘🏻‍♂️',
  '🧘🏼‍♀️',
  '🧘🏼‍♂️',
  '🧘🏽‍♀️',
  '🧘🏽‍♂️',
  '🧘🏾‍♀️',
  '🧘🏾‍♂️',
  '🧘🏿‍♀️',
  '🧘🏿‍♂️',
  '🧙‍♀️',
  '🧙‍♂️',
  '🧙🏻‍♀️',
  '🧙🏻‍♂️',
  '🧙🏼‍♀️',
  '🧙🏼‍♂️',
  '🧙🏽‍♀️',
  '🧙🏽‍♂️',
  '🧙🏾‍♀️',
  '🧙🏾‍♂️',
  '🧙🏿‍♀️',
  '🧙🏿‍♂️',
  '🧚‍♀️',
  '🧚‍♂️',
  '🧚🏻‍♀️',
  '🧚🏻‍♂️',
  '🧚🏼‍♀️',
  '🧚🏼‍♂️',
  '🧚🏽‍♀️',
  '🧚🏽‍♂️',
  '🧚🏾‍♀️',
  '🧚🏾‍♂️',
  '🧚🏿‍♀️',
  '🧚🏿‍♂️',
  '🧛‍♀️',
  '🧛‍♂️',
  '🧛🏻‍♀️',
  '🧛🏻‍♂️',
  '🧛🏼‍♀️',
  '🧛🏼‍♂️',
  '🧛🏽‍♀️',
  '🧛🏽‍♂️',
  '🧛🏾‍♀️',
  '🧛🏾‍♂️',
  '🧛🏿‍♀️',
  '🧛🏿‍♂️',
  '🧜‍♀️',
  '🧜‍♂️',
  '🧜🏻‍♀️',
  '🧜🏻‍♂️',
  '🧜🏼‍♀️',
  '🧜🏼‍♂️',
  '🧜🏽‍♀️',
  '🧜🏽‍♂️',
  '🧜🏾‍♀️',
  '🧜🏾‍♂️',
  '🧜🏿‍♀️',
  '🧜🏿‍♂️',
  '🧝‍♀️',
  '🧝‍♂️',
  '🧝🏻‍♀️',
  '🧝🏻‍♂️',
  '🧝🏼‍♀️',
  '🧝🏼‍♂️',
  '🧝🏽‍♀️',
  '🧝🏽‍♂️',
  '🧝🏾‍♀️',
  '🧝🏾‍♂️',
  '🧝🏿‍♀️',
  '🧝🏿‍♂️',
  '🧞‍♀️',
  '🧞‍♂️',
  '🧟‍♀️',
  '🧟‍♂️',
  '👨‍🦰',
  '👨‍🦱',
  '👨‍🦲',
  '👨‍🦳',
  '👨🏻‍🦰',
  '👨🏻‍🦱',
  '👨🏻‍🦲',
  '👨🏻‍🦳',
  '👨🏼‍🦰',
  '👨🏼‍🦱',
  '👨🏼‍🦲',
  '👨🏼‍🦳',
  '👨🏽‍🦰',
  '👨🏽‍🦱',
  '👨🏽‍🦲',
  '👨🏽‍🦳',
  '👨🏾‍🦰',
  '👨🏾‍🦱',
  '👨🏾‍🦲',
  '👨🏾‍🦳',
  '👨🏿‍🦰',
  '👨🏿‍🦱',
  '👨🏿‍🦲',
  '👨🏿‍🦳',
  '👩‍🦰',
  '👩‍🦱',
  '👩‍🦲',
  '👩‍🦳',
  '👩🏻‍🦰',
  '👩🏻‍🦱',
  '👩🏻‍🦲',
  '👩🏻‍🦳',
  '👩🏼‍🦰',
  '👩🏼‍🦱',
  '👩🏼‍🦲',
  '👩🏼‍🦳',
  '👩🏽‍🦰',
  '👩🏽‍🦱',
  '👩🏽‍🦲',
  '👩🏽‍🦳',
  '👩🏾‍🦰',
  '👩🏾‍🦱',
  '👩🏾‍🦲',
  '👩🏾‍🦳',
  '👩🏿‍🦰',
  '👩🏿‍🦱',
  '👩🏿‍🦲',
  '👩🏿‍🦳',
  '🧑‍🦰',
  '🧑‍🦱',
  '🧑‍🦲',
  '🧑‍🦳',
  '🧑🏻‍🦰',
  '🧑🏻‍🦱',
  '🧑🏻‍🦲',
  '🧑🏻‍🦳',
  '🧑🏼‍🦰',
  '🧑🏼‍🦱',
  '🧑🏼‍🦲',
  '🧑🏼‍🦳',
  '🧑🏽‍🦰',
  '🧑🏽‍🦱',
  '🧑🏽‍🦲',
  '🧑🏽‍🦳',
  '🧑🏾‍🦰',
  '🧑🏾‍🦱',
  '🧑🏾‍🦲',
  '🧑🏾‍🦳',
  '🧑🏿‍🦰',
  '🧑🏿‍🦱',
  '🧑🏿‍🦲',
  '🧑🏿‍🦳',
  '❤️‍🔥',
  '❤️‍🩹',
  '🏳️‍⚧️',
  '🏳️‍🌈',
  '🏴‍☠️',
  '🐈‍⬛',
  '🐕‍🦺',
  '🐦‍⬛',
  '🐻‍❄️',
  '👁️‍🗨️',
  '😮‍💨',
  '😵‍💫',
  '😶‍🌫️',
  '🧑‍🎄'
]

export default {
  random: function (count: number) {
    const numberOfEmojis = count
    const result = []

    for (let i = 0; i < numberOfEmojis; i++) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      result.push(randomEmoji)
    }
    return result
  }
}
