// 起動時の出力処理
// 現在のsession読み取り
var np = sessionStorage.getItem('np');
var h  = sessionStorage.getItem('h');
var hr = sessionStorage.getItem('hr');
if (np == null || h == null || hr == null) {
	np = Number(np);
	h  = Number(h);
	hr = Number(hr);
	var avg = (0).toFixed(3);
	var title = 'ルーキー';
}
else{
// AVGの計算 H/NP
	var avg = (Math.round((h / np) * 1000) / 1000).toFixed(3);
	// titleの呼び出し
	var title = 'no plan';
}
// recordbox書き出し
document.getElementById('NP').innerHTML    = np;
document.getElementById('AVG').innerHTML   = avg;
document.getElementById('H').innerHTML     = h;
document.getElementById('HR').innerHTML    = hr;
document.getElementById('title').innerHTML = title;
