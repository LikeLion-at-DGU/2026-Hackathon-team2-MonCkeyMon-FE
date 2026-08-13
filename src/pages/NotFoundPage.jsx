import PageHeader from '../components/PageHeader';

function NotFoundPage() {
  return (
    <main className="page">
      <PageHeader
        eyebrow="404"
        title="페이지를 찾을 수 없습니다"
        description="주소를 다시 확인해 주세요. 위의 버튼으로 홈에 돌아갈 수 있습니다."
      />
    </main>
  );
}

export default NotFoundPage;
