const letters = [
  "Hi Ghemm, I’m gonna assume that you opened this envelope first the first envelope so a quick explanation for the envelopes and letters are these well explain what chocolates, so this one explains the chocolates. At specifically 10:11 pm if I remember correctly nung Sunday before exam’s I think nag note ka ng “ice cream and chocolates please” and magrereply sana ako sa note mo na yayayain sana kita ng ice cream and bumili ng chocolate pero I know ng ana di ka parin comfortable na lumabas na lalaki lang kasama mo and stuff so plano ko nalang sana after exams ko bibigay pero nakausap ko si ands sabi nya mas maganda daw na Thursday or Friday ko ibigay since busy ka parin sa papers after exam so bibigay ko Talaga dapat yung chocolate and ice cream ay sa Friday PERO bigla na halfday pala and pag lumabas ka ng school di kana pwede pumasok tas naiwan ko yung lagayan ko ng chocolate sa bahay kaya di ko nabigay nung Friday so naisip ko nalang since April 2 yung tapos nung portrait pagsasabayin ko nalang ng bigay sa April 4 which is ngayon",
  "Hi again eto yung second envelope and eexplain ko naman here yung portrait, yung portrait ay pinagawa ko 3 or 5 days after mo isend yung pic and natapos sya nung April 2 so kaya ngayon ko sya binigay para isang bigayan nalang ng lahat. Plan ko nung una na sana ako magdradrawing nung portrait pero nung triny ko nalaman ko ulit na hanggang stick man lang kaya ko idrawing kaya after that nagdecide nalang ako na ipadrawing",
  "And lastly ito yung about sa box na maliit na if nabuksan mo na may makikita na necklace na specifically stainless so para di katulad ng dati na mangingitim dahil diko alam at the time na acidic ka kaya nung pauwi kami nung nagentrance exam ako bumili na me ng stainless na necklace and then mayroonn na sadya ako nung pendant na yun na ibibigay ko sana kasama yung hindi stainless na necklace pero naisip ko parang sobra naman na ganun yung pendant and even right now naiisip ko parin na baka sobra na ganun yung pendant yung may and I'm not gonna force you to wear it with that pendant you can remove it if you want pero of course for me mas gusto ko na suot mo na may kasamang pendant"
];

let currentLetter = 0;

function openLetter(index) {
  currentLetter = index;
  const letterText = document.getElementById("letterText");
  const letterPopup = document.getElementById("letterPopup");
  letterText.innerHTML = letters[index];
  letterPopup.style.display = 'flex';
}

function closeLetter() {
  const letterPopup = document.getElementById("letterPopup");
  letterPopup.style.display = 'none';
}
