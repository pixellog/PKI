$(function () {
  pageInit();
  // 공인인증서 복사하기 팝업
  modalCertCopy();
  // 알림 팝업
  // modalAlert();
});

function pageInit() {
  $('[data-toggle="popover"]').popover();
  btnDisabled();
  selectCert();
}

// 공인인증서 복사하기 팝업
function modalCertCopy() {
  $('#cert-copy-modal').modal('show',function () {
    $('#cert').show();
    $('#cert-save-path').hide();
  });
}

// 알림 팝업
function modalAlert() {
  $('#alert-modal').modal('show');
}

// 인증서 가져오기 확인
function certImportOk() {
  $('#cert-export-select').hide();
  $('#cert-save-path').show();
}

// 인증서 선택
function selectCert() {
  $(document).on('click', '.table-hover tbody tr', function () {
    $(this).addClass('bg-primary').siblings().removeClass('bg-primary');
  })
}
// 인증서 선택 방지
function selectCertDisabled() {
  $('.table').removeClass('table-hover').addClass('table-secondary');
  $('#input-cert-number').show();
  $('#input-cert-password').hide();
}

// 저장매체 disabled 스타일링 처리
function btnDisabled() {
  $(':disabled').closest('.btn').addClass('disabled');
}
