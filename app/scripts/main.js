// 공인인증서 복사하기 팝업
modalCertCopy();

// 공인인증서 복사하기 팝업
function modalCertCopy() {
  $('#cert-copy-modal').modal('show');
  certExportInit();
  selectDevice();
}

// 알림 팝업
function modalAlert() {
  $('#alert-modal').modal('show');
}

// 인증서 내보내기 초기화
function certExportInit() {
  selectCertInit(true);
  // 탭 활성화 초기화
  $('.tab-content .tab-pane').removeClass('active');
  $('.nav .nav-link').removeClass('active');
  // 첫번째탭 활성화
  $('.tab-content .tab-pane').eq(0).addClass('active');
  $('.nav .nav-link').eq(0).addClass('active');

  $('#cert').show();
  $('#cert-export-select').show();
  $('#cert-save-path').hide();
}

// 인증서 가져오기 > 확인 버튼
function certImportOk() {
  $('#cert-export-select').hide();
  $('#cert-save-path').show();
}

// 인증서 선택 비활성화
function selectCertDisabled() {
  // 1. 유효성 검증
  // 선택된 인증서 유무 체크하고 없으면 선택유도 얼럿 출력
  const check_cert = !$('.table .bg-primary').length;
  if (check_cert) {
    alert('선택된 인증서가 없습니다. 인증서를 선택해 주세요.');
    return;
  }
  // todo : 인증서 비밀번호 체크
  const check_pw = '11';
  const cert_pw = $('#cert-pw').val();
  if (check_pw !== cert_pw) {
    alert('인증서 비밀번호가 유효하지 않습니다.');
    return;
  }

  // 2. 유효성 검증 후
  selectCertInit(false);
}

// 인증서 선택 초기화
function selectCertInit(x) {
  if (x) {
    $('#tab-export').removeClass('disabled');
    $('.btn-group-toggle .btn').removeClass('disabled');
    $('.table').addClass('table-hover').removeClass('table-secondary');
    $('#input-cert-password').show();
    $('#input-cert-number').hide();
  } else {
    // 인증서 내보내기 탭 비활성화
    $('#tab-export').addClass('disabled');
    // 저장매체 선택 버튼 비활성화
    $('.btn-group-toggle .btn').addClass('disabled');
    // 인증서 선택 테이블 비활성화
    $('.table').removeClass('table-hover').addClass('table-secondary');
    // 인증 비밀번호 폼 숨기고
    $('#input-cert-password').hide();
    // 인증번호 폼 보이기
    $('#input-cert-number').show();
  }
}

// 저장매체
function selectDevice() {
  $(':disabled').closest('.btn').addClass('disabled');

  $(document).on('click', '[data-toggle="popover"]', function () {
    $('[data-toggle="popover"]').popover('hide');
    $(this).popover('show');
  });

  $(document).on('click', '[data-toggle="tab"]', function () {
    $('[data-toggle="popover"]').popover('hide');
  });

  // 이동식 디스크 선택
  $(document).on('click', '.popover a', function () {
    const active = 'active';
    $(this).addClass(active).siblings().removeClass(active);
  });

  // 인증서 리스트 선택
  $(document).on('click', '.table-hover tbody tr', function () {
    const active = 'bg-primary';
    $(this).addClass(active).siblings().removeClass(active);
  })

}
