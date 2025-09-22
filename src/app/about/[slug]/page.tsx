const AboutHistory = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>About dynamic : {slug} </div>;
};

export default AboutHistory;
