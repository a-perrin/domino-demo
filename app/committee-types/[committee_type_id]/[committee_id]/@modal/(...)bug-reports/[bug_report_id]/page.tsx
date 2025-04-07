export default async function BugReportPage(props: {
  params: Promise<{ bug_report_id: string }>;
}) {
  const params = await props.params;
  return (
    <div className="text-red-500">
      Bug report {params.bug_report_id} has been intercepted !
    </div>
  );
}
