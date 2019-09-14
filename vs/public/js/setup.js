// 起動時の出力処理
// 現在のsession読み取り
var np = sessionStorage.getItem('vsnp');
var h  = sessionStorage.getItem('vsh');
var hr = sessionStorage.getItem('vshr');
if (np == null || h == null || hr == null || np == 0) {
	np = Number(np);
	h  = Number(h);
	hr = Number(hr);
	var avg = (0).toFixed(3);
}
else{
// AVGの計算 H/NP
	var avg = (Math.round((h / np) * 1000) / 1000).toFixed(3);
}
// recordbox書き出し
document.getElementById('NP').innerHTML    = np;
document.getElementById('AVG').innerHTML   = avg;
document.getElementById('H').innerHTML     = h;
document.getElementById('HR').innerHTML    = hr;
