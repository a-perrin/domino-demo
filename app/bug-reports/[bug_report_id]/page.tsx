export default async function BugReportPage(props: {
  params: Promise<{ bug_report_id: string }>;
}) {
  const params = await props.params;
  return <h1>Bug report {params.bug_report_id}</h1>;
}
