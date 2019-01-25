# 공모전 접수 페이지 (관리자 페이지 포함)
공모전 접수 페이지입니다.


## 데이터베이스
데이터 베이스는 mysql 혹은 mariaDB를 사용하면 됩니다.<br/>
관리자 계정 및 database는 ./config/config.json 에서 수정할 수 있습니다.

## 텍스트 데이터
1. 공모요강, 개인정보 수집 동의서, 저작권 동의서 등등은 markdown으로 관리자 페이지에서 입력하도록 만듬
2. 공지사항은 markdown이 아닌 html 문서 단위로 저장
3. QNA도 markdown이 아닌 html 문서 단위로 저장