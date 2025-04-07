import Link from "next/link";

export default async function CommitteePage(props: {
  params: Promise<{ committee_type_id: string; committee_id: string }>;
}) {
  const params = await props.params;
  return (
    <>
      <h1>
        Committee type {params.committee_type_id}, committee{" "}
        {params.committee_id}
      </h1>
      <Link href="/bug-reports/1">Link to bug report 1</Link>
    </>
  );
}
