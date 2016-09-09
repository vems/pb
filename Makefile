.PHONY: pb

pb:
	@for p in ./*.proto; do \
		f=`basename $$p .proto`; \
		echo compiling: $$f; \
		mkdir -p $$f; \
		protoc $$p \
				--go_out=plugins=grpc:$$f \
				--python_out=plugins=grpc:$$f \
				--ruby_out=plugins=grpc:$$f \
				--js_out=$$f; \
	done
