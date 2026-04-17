import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos, error } = await supabase
    .from("todos")
    .select("id,name")
    .order("id", { ascending: false })
    .limit(20);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Supabase 连接测试</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        下面的数据来自 Supabase 的 <code>todos</code> 表。
      </p>

      {error ? (
        <p className="mt-6 rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-950/30 dark:text-red-300">
          查询失败：{error.message}
        </p>
      ) : (
        <ul className="mt-6 space-y-2">
          {todos?.map((todo) => (
            <li
              key={todo.id}
              className="rounded-lg border border-zinc-200 px-4 py-2 dark:border-zinc-800"
            >
              {todo.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
