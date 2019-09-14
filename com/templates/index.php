<!doctype html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <title>COMモード</title>
  <link rel="stylesheet" type="text/css" href="./public/css/style.css">
  <script src="./public/js/index.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap" rel="stylesheet">
</head>

<body>
  <div id="branding"></div>

  <div id="rulebox">
    <ul>
      <li>モード：COMモード</li>
      <li>高さを合わせてヒット</li>
      <li>目指せホームラン！！</li>
      <li><a href=../vs/index.php>VSモードへ</a></li>
      <li id="red" onclick="reset();">成績リセット</li>
    </ul>
  </div>

  <div id="resultbox">
    <p id="result">コースをクリック</p>
  </div>

  <div id="zone">
    <?php for ($i = 0; $i < 3; $i++) : ?>
      <div class="row">
        <div class="box box<?php echo $i + 0; ?>" onclick="judgment(this.className);">
          <img src="" alt="" class="image box<?php echo $i + 0; ?>" width="150px" height="150px">
        </div>
        <div class="box box<?php echo $i + 3; ?>" onclick="judgment(this.className);">
          <img src="" alt="" class="image box<?php echo $i + 3; ?>" width="150px" height="150px">
        </div>
        <div class="box box<?php echo $i + 6; ?>" onclick="judgment(this.className);">
          <img src="" alt="" class="image box<?php echo $i + 6; ?>" width="150px" height="150px">
        </div>
        <br>
      </div>
    <?php endfor; ?>
  </div>

  <div id="recordbox">
    <table>
      <tr>
        <td class="justified">投球数 : </td>
        <td id="NP"></td>
      </tr>
      <tr>
        <td class="justified">打率 : </td>
        <td id="AVG"></td>
      </tr>
      <tr>
        <td class="justified">安打 : </td>
        <td id="H"></td>
      </tr>
      <tr>
        <td class="justified">本塁打 : </td>
        <td id="HR"></td>
      </tr>
      <tr>
        <td class="justified">称号 : </td>
        <td id="title"></td>
      </tr>
    </table>
  </div>
  <script src="./public/js/setup.js"></script>
</body>

</html>