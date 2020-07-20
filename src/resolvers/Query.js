function feed(parent, args, context, info){
    return context.prisma.link.findMany()
}

// 해당 모듈을 export한다
module.exprots = {
    feed,
}

