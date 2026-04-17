import { fetchTodos, hasSupabaseEnv } from "@/lib/supabase";

export default async function Home() {
  const configured = hasSupabaseEnv();
  let errorMessage: string | null = null;
  let todos: Array<{
    id: number;
    title: string;
    is_complete: boolean;
    created_at: string;
  }> = [];

  if (configured) {
    try {
      todos = await fetchTodos();
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : "Unknown error";
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Next.js + Supabase</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          你的项目已经接入 Supabase。当前页面会读取 <code>todos</code> 表最近的 5
          条数据。
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="mb-2 text-lg font-medium">连接状态</h2>
        {!configured ? (
          <p className="text-amber-700 dark:text-amber-400">
            未检测到环境变量。请在 <code>.env.local</code> 中配置
            <code>NEXT_PUBLIC_SUPABASE_URL</code> 和
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>。
          </p>
        ) : errorMessage ? (
          <p className="text-red-700 dark:text-red-400">连接失败：{errorMessage}</p>
        ) : (
          <p className="text-emerald-700 dark:text-emerald-400">连接成功 ✅</p>
        )}
      </section>

      <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="mb-4 text-lg font-medium">Todos</h2>
        {todos.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">暂无数据（或尚未完成环境配置）。</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3 dark:bg-zinc-900"
              >
                <span>{todo.title}</span>
                <span
                  className={todo.is_complete ? "text-emerald-600" : "text-zinc-500"}
                >
                  {todo.is_complete ? "已完成" : "未完成"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
