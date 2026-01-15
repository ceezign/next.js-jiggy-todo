import Todo from "../../components/Todo"
import fetchTodo from "@/src/lib/fetchTodo"
import { notFound } from "next/navigation"

export const revalidate = 0

type Props = {
    params: {
        id: string | string[]
    } | Promise<{ id: string | string[] }>
}

export default async function page(props: Props) {
    // `params` can be a Promise in some Next.js runtimes — await it safely.
    const { params } = await Promise.resolve(props)
    const resolvedParams = await Promise.resolve(params as any)

    const id = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id

    if (!id) notFound()

    const todo = await fetchTodo(id)

    if (!todo) notFound()

    return <Todo {...todo} />
}