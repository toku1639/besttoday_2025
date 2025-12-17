<?php
if(isset($_POST['submit-confirm']) && ($_POST['submit-confirm'] == 'submit-confirm')) {

    $submit_btn = isset($_POST['submit_btn']) ? $_POST['submit_btn']: '';
    $field1 = isset($_POST['field1']) ? $_POST['field1']: '';
    $field2 = isset($_POST['field2']) ? $_POST['field2']: '';
    $field3 = isset($_POST['field3']) ? $_POST['field3']: '';
    $field4 = isset($_POST['field4']) ? $_POST['field4']: '';
    $field5 = isset($_POST['field5']) ? $_POST['field5']: '';
    
    $to      = 'seniordev745@gmail.com';
    $message = "
    相談内容 : ".$submit_btn."<br>
    会社名 : ".$field1."<br>
    担当者名 : ".$field2."<br>
    電話番号 : ".$field3."<br>
    メールアドレス : ".$field4."<br>
    お問い合わせ内容 : ".$field5."<br>
    ";

    $subject = 'お問い合わせがありました';

    $headers = "From: " . $field4 . "\r\n";
    $headers .= "Reply-To: " . $field4 . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to, $subject, $message, $headers);
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks</title>
  <link rel="stylesheet" href="../css/font.css" type="text/css">
  <link rel="stylesheet" href="../css/stylesheet.css" type="text/css">
</head>

<body class="thanks">
  <div class="page_thanks">
    <div class="thanks_content">
      <h2 class="thanks_ttl">お問い合わせありがとうございます</h2>
      <p class="thanks_txt">
        担当者が確認し、1～2営業日以内に<br class="sp_break" />ご登録の<br class="sp_hide" />メールアドレス宛に<br class="sp_break" />ご連絡差し上げます。
      </p>
      <a class="thanks_btn" href="../index.html">トップに戻る</a>
    </div>
  </div>
</body>

</html>