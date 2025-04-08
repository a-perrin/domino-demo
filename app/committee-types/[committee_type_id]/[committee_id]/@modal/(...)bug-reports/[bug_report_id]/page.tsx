export default async function BugReportPage({
  params,
}: {
  params: Promise<{
    bug_report_id: string;
    committee_type_id: string;
    committee_id: string;
  }>;
}) {
  const { bug_report_id } = await params;

  return (
    <div className="text-red-500">
      Bug report {bug_report_id} has been intercepted !
    </div>
  );
}
